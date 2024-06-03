import axios from 'axios';

export const client = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1.4/',
    timeout: 1000,
    headers: {
        accept: 'application/json',
        'X-API-KEY': '2KYD7FF-JY4M4PZ-Q0HD2BT-SG468KD',
        'Access-Control-Allow-Origin': '*',
    },
});
