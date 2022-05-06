// This is the base path of the Express route we'll define
import {getToken} from './users-service'
const BASE_URL = '/api/users';

export async function signUp(userData){
    return sendRequest(`${BASE_URL}`, 'POST', userData)
}

export async function checkToken(){
    return sendRequest(`${BASE_URL}/check-token`)
}

export async function login(credentials){
    return sendRequest(`${BASE_URL}/login`,'POST', credentials)  
}

async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
      options.headers = options.headers || {};
      options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
  }