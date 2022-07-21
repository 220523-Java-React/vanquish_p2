// configuration for our API

import axios from 'axios';

// let BASE_API_URL = "localhost:8080";

export const API = () => axios.create({
    // baseURL: BASE_API_URL,
    timeout: 1000,
    headers: {
        'Access-Control-Allow-Origin': "http://localhost:8080",
        "Content-Type": "application/json"
    }
});

export const APIGet = endpoint => axios.get(endpoint, {
    headers: {
        'Access-Control-Allow-Origin': "http://localhost:8080",
        "Content-Type": "application/json"
    }  
});

export const APIPost = (endpoint, body) => {
   axios.post(endpoint, body);
}
    

/*
export function updateApi(token){
    API = axios.create({
        baseURL: BASE_API_URL,
        timeout: 1000,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
*/