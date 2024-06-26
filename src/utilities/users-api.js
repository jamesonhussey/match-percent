import { sendRequest } from "./send-request";
const BASE_URL = '/api/users';


export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export async function editProfile(id, credentials) {
    return sendRequest(`${BASE_URL}/edit/${id}`, 'PUT', credentials)
}

export async function deleteUser(id) {
    return sendRequest(`${BASE_URL}/delete/${id}`, 'DELETE')
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}

export async function showAll(userId) {
    console.log("userId: " + userId)
    return sendRequest(`${BASE_URL}/${userId}`, 'GET')
}