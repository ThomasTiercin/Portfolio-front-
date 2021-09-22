import config from '../config.json';
import { authHeader, postAuthHeader } from '../_helpers';

export const certificationService = {
    getAll,
    deleteCertification,
    getCertificationById,
    updateCertification,
    createCertification
};


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/certifications`, requestOptions).then(handleResponse);
}

function getCertificationById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/Certifications/${id}`, requestOptions).then(handleResponse);
}

function deleteCertification(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/Certifications/${id}`, requestOptions).then(handleResponse);
}

function updateCertification(id, certification) {
    const requestOptions = {
        method: 'PUT',
        headers:   postAuthHeader(),
        body: JSON.stringify(certification)
    };
    return fetch(`${config.apiUrl}/api/Certifications/${id}`, requestOptions).then(handleResponse);
}

function createCertification(certification) {
    const requestOptions = {
        method: 'POST',
        headers:   postAuthHeader(),
        body: JSON.stringify(certification)
    };
    return fetch(`${config.apiUrl}/api/Certifications`, requestOptions).then(handleResponse);
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