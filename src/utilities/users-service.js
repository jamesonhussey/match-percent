// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import { getSuggestedQuery } from '@testing-library/react';
import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token)
  return getUser()
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials)
    localStorage.setItem('token', token)
    return getUser()
}

export async function logOut() {
    localStorage.removeItem('token')
}

export function getToken() {
    const token = localStorage.getItem('token')

    // No token exists, set user to null
    if (!token) return null
    // Valid token does exist, get user from token
    const payload = JSON.parse(atob(token.split('.')[1]))
    // Expired token
    if (payload.exp * 1000 < Date.now()) {
        localStorage.removeItem('token')
        return null
    }
    return token
}

export function checkToken() {
    return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr))
}

export function getUser() {
    const token = getToken()
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}