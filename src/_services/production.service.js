import config from '../config.json';
import { authHeader, postAuthHeader } from '../_helpers';

export const productionService = {
    getAll,
    deleteProduction,
    getProductionById,
    updateProduction,
    createProduction
};


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: {  'Content-Type': 'application/json'}
    };
    return fetch(`${config.apiUrl}/api/productions`, requestOptions).then(handleResponse);
}

function getProductionById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/Productions/${id}`, requestOptions).then(handleResponse);
}

function deleteProduction(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/Productions/${id}`, requestOptions).then(handleResponse);
}

function updateProduction(id, production) {
    const requestOptions = {
        method: 'PUT',
        headers:  postAuthHeader(),
        body: JSON.stringify(production)
    };
    return fetch(`${config.apiUrl}/api/Productions/${id}`, requestOptions).then(handleResponse);
}

function createProduction(production) {
    const requestOptions = {
        method: 'POST',
        headers:   postAuthHeader(),
        body: JSON.stringify(production)
    };
    return fetch(`${config.apiUrl}/api/Productions`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                return Promise.reject(error);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}