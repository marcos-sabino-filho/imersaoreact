import config from '../config';
import API from '../api';

const ListaCategoriaPadrao = [{
    id: 0,
    titulo: '--- Selecione uma categoria ---',
    cor: '#ffffff',
    link_extra: {
        text:'',
        url:''
    }
}];

async function getAll(){
    const resposta = await API.GET(`${config.URL_BACKEND_TOP}/categorias`)
    return resposta ? ListaCategoriaPadrao.concat(resposta) : ListaCategoriaPadrao;
}

async function getById(id){
    const resposta =  API.GET(`${config.URL_BACKEND_TOP}/categorias/${id}`);
    return resposta ? resposta : ListaCategoriaPadrao;
}

const ListaCategoriaComVideosIniciais = {
    id: 0,
    titulo: '--- Selecione uma categoria ---',
    cor: '#ffffff',
    link_extra: {
        text:'',
        url:''
    },
    videos: [{
        id: 0,
        titulo: 'Sem vídeos nessa categoria',
        categoriaId: 0,
        url: ''
    }]
};

async function getAllWithVideos(){
    const resposta = await API.GET(`${config.URL_BACKEND_TOP}/categorias?_embed=videos`);
    return resposta ? resposta : ListaCategoriaComVideosIniciais;
}

async function getByIdWithVideos(id){
    const resposta = await API.GET(`${config.URL_BACKEND_TOP}/categorias/${id}?_embed=videos`);
    return resposta ? resposta : ListaCategoriaComVideosIniciais;
}

export default {
    getAll,
    getById,
    getAllWithVideos,
    getByIdWithVideos,
};