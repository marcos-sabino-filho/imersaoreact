import config from '../config';
import API from '../api';

async function getAll(){
    return await API.GET(`${config.URL_BACKEND_TOP}/categorias`);
}

async function getById(id){
    return await API.GET(`${config.URL_BACKEND_TOP}/categorias/${id}`);
}

async function getAllWithVideos(){
    return await API.GET(`${config.URL_BACKEND_TOP}/categorias?_embed=videos`);
}

async function getByIdWithVideos(id){
    return await API.GET(`${config.URL_BACKEND_TOP}/categorias/${id}/?_embed=videos`);
}

export default {
    getAll,
    getById,
    getAllWithVideos,
    getByIdWithVideos,
};