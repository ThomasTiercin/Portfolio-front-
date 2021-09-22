import config from '../config.json';
import { authHeader, postAuthHeader } from '../_helpers';

export const personalSkillService = {
    getAll,
    deletePersonalSkill,
    getPersonalSkillById,
    updatePersonalSkill,
    createPersonalSkill
};


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/personalSkills`, requestOptions).then(handleResponse);
}

function getPersonalSkillById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/PersonalSkills/${id}`, requestOptions).then(handleResponse);
}

function deletePersonalSkill(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/PersonalSkills/${id}`, requestOptions).then(handleResponse);
}

function updatePersonalSkill(id, personalSkill) {
    const requestOptions = {
        method: 'PUT',
        headers:   postAuthHeader(),
        body: JSON.stringify(personalSkill)
    };
    return fetch(`${config.apiUrl}/api/PersonalSkills/${id}`, requestOptions).then(handleResponse);
}

function createPersonalSkill(personalSkills) {
    const requestOptions = {
        method: 'POST',
        headers:   postAuthHeader(),
        body: JSON.stringify(personalSkills)
    };
    return fetch(`${config.apiUrl}/api/PersonalSkills`, requestOptions).then(handleResponse);
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