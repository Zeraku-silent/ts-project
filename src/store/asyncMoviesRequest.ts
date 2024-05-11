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

export const fetchMovieById = createAsyncThunk<IMovie[]>(
    'movies/fetchMovieById',
    async () => {
        const response = await fetch(
            `https://api.kinopoisk.dev/v1.4/movie?pages=1-2&limit=50`,
            options
        );
        const data = await response.json();
        const movies: IMovie[] = data.docs;
        // console.log(movies);

        return movies;
    }
);
