import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMovie } from './movieReducer';
import axios from 'axios';

interface IMovie {
    id: string | number;
    name: string;
    year: number;
    poster: {
        url: string;
        previewUrl: string;
    };
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-API-KEY': '2KYD7FF-JY4M4PZ-Q0HD2BT-SG468KD',
    },
};

const userId = 400;



export const fetchUserById = createAsyncThunk(
    'users/fetchById',
    async (userId: number) => {
        const response:<Response> = await axios(`https://api.kinopoisk.dev/v1.4/movie/${userId}`, options);
        const data = await( (response:Response):IMovie=>response.data)
        return (await data ) 
        ;
    }
);

// the parameter of `fetchUserById` is automatically inferred to `number` here
// and dispatching the resulting thunkAction will return a Promise of a correctly
// typed "fulfilled" or "rejected" action.
