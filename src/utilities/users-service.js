import * as usersAPI from './users-api';

        //sign up
export async function signUp(userData) {
    // Delete the network request code to the
    // users-api.js module which will ultimately
    // return the JWT
    const token = await usersAPI.signUp(userData);
    // Persist the token to localStorage
    localStorage.setItem('token', token);
    return token;
}
        // login
 export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    //Persist the token to localStorage
        localStorage.setItem('token', token);
     return getUser();
 }

        //get token
export function getToken() {
    const token = localStorage.getItem('token');
    // getItem will return null if no key
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's expiration is expressed in seconds, not miliseconds
    if (payload.exp < Date.now() / 1000) {
        // Token has expired
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

    //get user
export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}
        //logout
export function logOut() {
    localStorage.removeItem('token');
}

// checkToken

export function checkToken(){
    return usersAPI.checkToken()
           .then(dateStr => new Date(dateStr))
}