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
        const { getAttribute, value } = infosDoEvento.target;

        /* FUNCIONA COM COMPONENTE */
        setValue(
            infosDoEvento.target.getAttribute('name'), 
            infosDoEvento.target.value
            );

        /* NÃO FUNCIONAR COM COMPONENTE */
        // setValue(
        //     getAttribute('name'), 
        //     value
        //     );
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
                {/* <div>
                    <label>
                        Cor:
                        <input 
                        name="cor" 
                        type="color" 
                        value={values.cor} 
                        onChange={handleChangeCampo} />
                    </label>
                </div> */}

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