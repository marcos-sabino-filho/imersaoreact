import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MasterPage from '../../../components/MasterPage';
import FormField from '../../../components/FormField';
import styled from 'styled-components';

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const LiEstilizado = styled.li`
    color: ${props => props.cor};
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

  return (
    <MasterPage>
      <h1>
        Cadastro de Categoria:
        {values.nome}
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
          name="nome"
          type="text"
          value={values.nome}
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

      <ul>
        {categorias.map((categoria, indice) => (
          <LiEstilizado key={`${categoria}${indice}`} cor={categoria.cor}>
            {categoria.nome}
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
