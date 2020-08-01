import React, { useState, useEffect } from 'react';
import MasterPage from './../../../components/MasterPage';
import { Link } from 'react-router-dom';
import categoriaRepo from '../../../repository/categoria';
// import videosRepo from '../../../repository/videos';
// import useForm from './../../../hooks/useForm';
import SelectEstilo from '../../../components/Select/index';
import loadingGif from '../../../assets/img/loading_table.gif';
import styled from 'styled-components';

function CadastroVideo(){

    const ImagemLoading = styled.img`
        width:100px;
        height:100px;
        background-image: 
                url(${props => props.src});
    `;

    // const { values, handleChangeCampo, clearForm } = useForm(valoresIniciaisVideos);

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

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>

            <SelectEstilo 
            name="listaCategorias"
            dados={ListaCategorias}
            onChange={SelecionarCategoria} />

            <table>
                <thead>
                    <tr>
                        <td>Título</td>
                        <td>Url</td>
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
                                <td>{video.url}</td>
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