import { createAsyncThunk } from '@reduxjs/toolkit';

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
    headers: {
        accept: 'application/json',
        'X-API-KEY': '2KYD7FF-JY4M4PZ-Q0HD2BT-SG468KD',
    },
};

export const fetchMovieById = createAsyncThunk<IMovie, number>(
    'movies/fetchMovieById',
    async (id: number) => {
        const response = await fetch(
            `https://api.kinopoisk.dev/v1.4/movie/${id}`,
            options
        );
        const data: IMovie = await response.json();

        return data;
    }
);
