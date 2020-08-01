import config from '../config';
import API from '../api';

async function getAll() {
    return await API.GET(`${config.URL_BACKEND_TOP}/videos`);
}

async function getById(id) {
    return await API.GET(`${config.URL_BACKEND_TOP}/videos/${id}`);
}

async function create(objeto) {
    return await API.CREATE(`${config.URL_BACKEND_TOP}/videos?_embed=videos`, objeto)
}

export default {
    getAll,
    getById,
    create
};