import config from '../config.json';
import { authHeader, postAuthHeader } from '../_helpers';

export const professionalSkillService = {
    getAll,
    deleteProfessionalSkill,
    getProfessionalSkillById,
    updateProfessionalSkill,
    createProfessionalSkill
};


function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/professionalSkills`, requestOptions).then(handleResponse);
}

function getProfessionalSkillById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/ProfessionalSkills/${id}`, requestOptions).then(handleResponse);
}

function deleteProfessionalSkill(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/api/ProfessionalSkills/${id}`, requestOptions).then(handleResponse);
}

function updateProfessionalSkill(id, professionalSkill) {
    const requestOptions = {
        method: 'PUT',
        headers:   postAuthHeader(),
        body: JSON.stringify(professionalSkill)
    };
    return fetch(`${config.apiUrl}/api/ProfessionalSkills/${id}`, requestOptions).then(handleResponse);
}

function createProfessionalSkill(professionalSkills) {
    const requestOptions = {
        method: 'POST',
        headers:   postAuthHeader(),
        body: JSON.stringify(professionalSkills)
    };
    return fetch(`${config.apiUrl}/api/ProfessionalSkills`, requestOptions).then(handleResponse);
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