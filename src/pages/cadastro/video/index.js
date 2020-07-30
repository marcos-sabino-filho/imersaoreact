import React from 'react';
import MasterPage from './../../../components/MasterPage';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
        <MasterPage>
            <h1>Cadastro de vídeos</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </MasterPage>
    )
};

export default CadastroVideo;