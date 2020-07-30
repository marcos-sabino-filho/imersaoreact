import React, { useState } from 'react';
import MasterPage from './../../../components/MasterPage';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    };

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor
        });
    }

    function handleChangeCampo(infosDoEvento){
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
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();

                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>
                <FormField 
                    label="Nome da Categoria:"
                    name="nome" 
                    type="text"  
                    value={values.nome}  
                    onChange={handleChangeCampo}
                />

                {/* <FormField 
                    label="Descrição:"
                    name="cor" 
                    type="color"  
                    value={values.cor}  
                    onChange={handleChangeCampo}
                /> */}
                <div>
                    <label>
                        Descrição:
                        <textarea 
                        name="descricao" 
                        value={values.descricao} 
                        onChange={handleChangeCampo} />
                    </label>
                </div>

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
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </MasterPage>
    )
};

export default CadastroCategoria;