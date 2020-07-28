import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import ButtonLink from '../buttonLink';

function Menu (){
    return(
    <nav className="Menu">
        <a href="/">
            <img className="Logo" src={Logo} alt="Logo DaviFlix" />  
        </a>
        <ButtonLink className="ButtonLink" href="/">
            Novo Vídeo
        </ButtonLink>
    </nav>
    );
}

export default Menu;