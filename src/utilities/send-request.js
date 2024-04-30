import { getToken } from "./users-service"

export async function sendRequest(url, method = 'GET', payload = null) {
    const options = {method}

    if(payload) {
        options.headers = { 'Content-Type': 'application/json' }
        options.body = JSON.stringify(payload)
    }
    const token = getToken()
    if (token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`
    }
    const res = await fetch(url, options)
    // Check if request was successful
    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Invalid Sign Up');
    }
}