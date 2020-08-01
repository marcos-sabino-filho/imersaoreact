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
    return await API.GET(`${config.URL_BACKEND_TOP}/categorias`)
    .then((resposta) => {return ListaCategoriaPadrao.concat(resposta);})
    .catch(() => {return ListaCategoriaPadrao;});
}

async function getById(id){
    return API.GET(`${config.URL_BACKEND_TOP}/categorias/${id}`)
    .then((resposta) => {return ListaCategoriaPadrao.concat(resposta);})
    .catch((err) => { return ListaCategoriaPadrao; });
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
    return await API.GET(`${config.URL_BACKEND_TOP}/categorias?_embed=videos`)
    .then((resposta) => {return resposta;})
    .catch(() => {return ListaCategoriaComVideosIniciais;});
}

async function getByIdWithVideos(id){
    return await API.GET(`${config.URL_BACKEND_TOP}/categorias/${id}?_embed=videos`)
    .then((resposta) => {return resposta;})
    .catch(() => {return ListaCategoriaComVideosIniciais;});
}

export default {
    getAll,
    getById,
    getAllWithVideos,
    getByIdWithVideos,
};