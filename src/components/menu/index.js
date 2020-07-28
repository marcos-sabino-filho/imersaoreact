import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import ButtonLink from '../buttonLink';
import Button from '../Button';

function Menu (){
    return(
    <nav className="Menu">
        <a href="/">
            <img className="Logo" src={Logo} alt="Logo DaviFlix" />  
        </a>
        <Button as="a" className="ButtonLink" href="/">
            Novo Vídeo
        </Button>
    </nav>
    );
}

export default Menu;