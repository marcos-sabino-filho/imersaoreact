import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MasterPage from '../../../components/MasterPage';
import FormField from '../../../components/FormField';
import styled from 'styled-components';
import loadingGif from '../../../assets/img/loading.gif';
import useForm from './../../../hooks/useForm';
import categoriaRepo from '../../../repository/categoria';
import Button from '../../../components/Button';
import './botao.css';

function CadastroCategoria() {

  const valoresIniciais = {
    id: 0,
    titulo: '',
    descricao: '',
    cor: '#000'
  };

  const { values, handleChangeCampo, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  const LiEstilizado = styled.li`
    color: ${props => props.cor};
  `;

  const ImagemLoading = styled.img`
    width:100px;
    height:100px;
    background-image: 
            url(${props => props.src});
  `;

  useEffect(() => {
      categoriaRepo
      .getAll()
      .then((respostaDoServer) => {
        // setTimeout só pra aparecer o gif do loading
        setTimeout(()=>{setCategorias(respostaDoServer)}, 4*1000);
      });
  }, []);

  return (
    <MasterPage>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria:"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChangeCampo}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChangeCampo}
        />

        <FormField
          label="Cor:"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handleChangeCampo}
        />

        <Button className="ButtonLink">
            Cadastrar
        </Button>
      </form>

    {categorias.length === 0 && <div>
    {/* CARREGANDO... */}  
    <ImagemLoading alt="Loading..." src={loadingGif} />

    </div>}

      <ul>
        {categorias.map((categoria, indice) => (
          <LiEstilizado key={`${categoria}${indice}`} cor={categoria.cor}>
            {categoria.titulo}
          </LiEstilizado>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </MasterPage>
  );
}

export default CadastroCategoria;
