import React, { useState, useEffect } from 'react';
import MasterPage from './../../../components/MasterPage';
import { Link } from 'react-router-dom';
import categoriaRepo from '../../../repository/categoria';
// import videosRepo from '../../../repository/videos';
import useForm from './../../../hooks/useForm';
import SelectEstilo from '../../../components/Select/index';
import FormField from '../../../components/FormField';
import loadingGif from '../../../assets/img/loading_table.gif';
import styled from 'styled-components';
import Button from '../../../components/Button';
import './botao.css';

function CadastroVideo(){

    const ImagemLoading = styled.img`
        width:100px;
        height:100px;
        background-image: 
                url(${props => props.src});
    `;

    const valoresIniciaisVideos = {
        id: 0,
        titulo: '',
        categoriaId: 0,
        url: ''
    };

    const { values, handleChangeCampo, clearForm } = useForm(valoresIniciaisVideos);

    const [ListaCategorias, setListaCategorias] = useState([]);
    const [categoriaSelecionadaComVideos, setVideosComCategoria] = useState();
    const [carregandoVideosDaCategoria, setLoadingParaVideos] = useState(false);

    function SelecionarCategoria(evento){
        categoriaRepo
        .getByIdWithVideos(evento.target.value)
        .then((respostaDoServer) => {
            setLoadingParaVideos(true);
            setTimeout(()=>{
                setVideosComCategoria(respostaDoServer)
                setLoadingParaVideos(false);
            }, 2*1000);
            });
    }
  
    useEffect(() => { 
        categoriaRepo
        .getAll()
        .then((respostaDoServer) => {
            // setTimeout só pra aparecer o gif do loading
            setTimeout(()=>{
                setListaCategorias(respostaDoServer)
            }, 2*1000);
        });
    }, []);

    return (
        <MasterPage>
            <h1>Cadastro de vídeos</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();

                // setCategorias([
                // ...categorias,
                // values,
                // ]);

                clearForm();
            }}
            >
                <SelectEstilo
                    label="Selecione a Categoria"
                    name="listaCategorias"
                    dados={ListaCategorias}
                    onChange={SelecionarCategoria} />

                <FormField
                    label="Título do vídeo:"
                    name="titulo"
                    type="text"
                    value={values.titulo}
                    onChange={handleChangeCampo} />

                <FormField
                    label="Título do vídeo:"
                    name="url"
                    type="text"
                    value={values.url}
                    onChange={handleChangeCampo} />
            </form>

            <Button className="ButtonMasterPage">
                Cadastrar Videos
            </Button>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>

            <table className="purpleHorizon">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Url</th>
                    </tr>
                </thead>
                {!carregandoVideosDaCategoria && 
                categoriaSelecionadaComVideos && 
                categoriaSelecionadaComVideos.videos && 
                categoriaSelecionadaComVideos.videos.map((video, indice) => {
                    const chaveTbody = `tbody_${indice}`;
                    const chaveTR = `tr_${indice}`;
                    return (
                        <tbody key={chaveTbody}>
                            <tr key={chaveTR}>
                                <td>{video.titulo}</td>
                                <td><a href={video.url}>{video.url}</a></td>
                            </tr>
                        </tbody>
                    )
                })}
                {
                    carregandoVideosDaCategoria && (
                    <tbody key="tbody_1">
                        <tr key="tr_1">
                            <td colSpan="2">
                                <ImagemLoading id="imagemLoadingTable" alt="Loading..." src={loadingGif} />
                            </td>
                        </tr>
                    </tbody>)
                }
            </table>
        </MasterPage>
    )
};

export default CadastroVideo;