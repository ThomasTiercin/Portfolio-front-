import config from '../config.json';
import { authHeader, postAuthHeader } from '../_helpers';

export const educationService = {
    getAll,
    deleteEducation,
    getEducationById,
    updateEducation,
    createEducation
};


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/educations`, requestOptions).then(handleResponse);
}

function getEducationById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/Educations/${id}`, requestOptions).then(handleResponse);
}

function deleteEducation(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/Educations/${id}`, requestOptions).then(handleResponse);
}

function updateEducation(id, education) {
    const requestOptions = {
        method: 'PUT',
        headers:   postAuthHeader(),
        body: JSON.stringify(education)
    };
    return fetch(`${config.apiUrl}/api/Educations/${id}`, requestOptions).then(handleResponse);
}

function createEducation(education) {
    const requestOptions = {
        method: 'POST',
        headers:   postAuthHeader(),
        body: JSON.stringify(education)
    };
    return fetch(`${config.apiUrl}/api/Educations`, requestOptions).then(handleResponse);
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