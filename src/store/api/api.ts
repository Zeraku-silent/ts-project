import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie } from '../movieReducer';

type IMovieFetch = {
    docs: IMovie[];
    total: number;
    limit: number;
    page: number;
    pages: number;
};

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev/v1.4/',
        headers: {
            accept: 'application/json',
            'X-API-KEY': '2KYD7FF-JY4M4PZ-Q0HD2BT-SG468KD',
        },
    }),
    endpoints: (builder) => ({
        getMovies: builder.query<IMovieFetch, string>({
            query: () =>
                '/movie?page=1&limit=10&selectFields=name&selectFields=poster&selectFields=year&selectFields=type&selectFields=rating&selectFields=genres&selectFields=id&notNullFields=name&notNullFields=id&type=movie&year=2023&rating.imdb=8-10&genres.name=%D0%B1%D0%BE%D0%B5%D0%B2%D0%B8%D0%BA',
        }),
    }),
});

export const { useGetMoviesQuery } = moviesApi;
