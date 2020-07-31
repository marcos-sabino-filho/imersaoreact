import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MasterPage from '../../../components/MasterPage';
import FormField from '../../../components/FormField';
import styled from 'styled-components';
import loadingGif from '../../../assets/img/loading.gif';

function CadastroCategoria() {
  
  const valoresIniciais = {
    id: 0,
    titulo: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const LiEstilizado = styled.li`
    color: ${props => props.cor};
  `;

  const ImagemLoading = styled.img`
    width:100px;
    height:100px;
    background-image: 
            url(${props => props.src});
  `;

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChangeCampo(infosDoEvento) {
    /* SEM COMPONENTE */
    // const { getAttribute, value } = infosDoEvento.target;
    // setValue(
    //     getAttribute('name'),
    //     value
    //     );

    /* COM COMPONENTE */
    const { name, value } = infosDoEvento.target;
    setValue(name, value);
  }

  useEffect(() => {

      const URL = window.location.href.includes('localhost')
      ?'http://localhost:8080/categorias'
      :'https://daviflix-marcossabinofilho.herokuapp.com/categorias';

      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setTimeout(()=>{setCategorias(resposta)}, 4*1000);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
    
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

        setValues(valoresIniciais);
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

        <button>
          Cadastrar
        </button>
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
