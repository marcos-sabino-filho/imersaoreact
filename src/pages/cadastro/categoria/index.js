import React from 'react';
import MasterPage from './../../../components/MasterPage';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
        <MasterPage>
            <h1>Cadastro de categorias</h1>

            <form>

                <label>
                    Nome da Categoria:
                    <input type="text" />
                </label>

                <button>
                Cadastrar
                </button>
            </form>

            <Link to="/">
                Ir para Home
            </Link>
        </MasterPage>
    )
};

export default CadastroCategoria;