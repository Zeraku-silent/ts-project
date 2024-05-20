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
            query: (genresName) =>
                `/movie?page=1&limit=10&selectFields=name&selectFields=poster&selectFields=year&selectFields=type&selectFields=rating&selectFields=genres&selectFields=id&notNullFields=name&notNullFields=id&notNullFields=poster.url&year=2012&rating.imdb=7-10&genres.name=${genresName}`,
        }),
    }),
});

export const { useGetMoviesQuery } = moviesApi;
