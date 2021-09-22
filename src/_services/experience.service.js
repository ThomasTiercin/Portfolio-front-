import config from '../config.json';
import { authHeader, postAuthHeader } from '../_helpers';

export const experienceService = {
    getAll,
    deleteExperience,
    getExperienceById,
    updateExperience,
    createExperience
};


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/experiences`, requestOptions).then(handleResponse);
}

function getExperienceById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/Experiences/${id}`, requestOptions).then(handleResponse);
}

function deleteExperience(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/Experiences/${id}`, requestOptions).then(handleResponse);
}

function updateExperience(id, experience) {
    const requestOptions = {
        method: 'PUT',
        headers:   postAuthHeader(),
        body: JSON.stringify(experience)
    };
    return fetch(`${config.apiUrl}/api/Experiences/${id}`, requestOptions).then(handleResponse);
}

function createExperience(experience) {
    const requestOptions = {
        method: 'POST',
        headers:   postAuthHeader(),
        body: JSON.stringify(experience)
    };
    return fetch(`${config.apiUrl}/api/Experiences`, requestOptions).then(handleResponse);
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