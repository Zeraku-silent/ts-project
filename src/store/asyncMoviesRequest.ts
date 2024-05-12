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

const url =
    'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&type=movie&year=2000-2008&rating.kp=8-10&genres.name=%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F&countries.name=%D0%A1%D0%A8%D0%90';

const options = {
    headers: {
        accept: 'application/json',
        'X-API-KEY': '2KYD7FF-JY4M4PZ-Q0HD2BT-SG468KD',
    },
};

export const fetchMovieById = createAsyncThunk<IMovie[]>(
    'movies/fetchMovieById',
    async () => {
        const response = await fetch(url, options);
        const data = await response.json();
        const movies: IMovie[] = data.docs;
        // console.log(movies);

        return movies;
    }
);
