import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../config/api';
import { getMoviesQuery } from './getMoviesQuery';
import { STATUS } from '../../config/statuses';
import { IMovieFetch, IMovie } from '../../models/movie';
import { RootState } from '../store';

interface IState {
    status: STATUS;
    data: IMovie[];
    film: IMovie | null;
}

const initialState: IState = {
    status: STATUS.IDLE,
    data: [],
    film: null,
};

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (genre: string) => {
        const response = await client.get<IMovieFetch>(getMoviesQuery(genre));
        console.log(response);

        return response.data.docs;
    }
);

export const fetchMovieById = createAsyncThunk(
    'movies/fetchMovieById',
    async (id: string | undefined) => {
        const response = await client.get<IMovie>(`movie/${id}`);
        console.log(response);
        return response.data;
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = STATUS.PENDING;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.data = [...state.data, ...action.payload];
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.status = STATUS.ERROR;
            })
            .addCase(fetchMovieById.pending, (state) => {
                state.status = STATUS.PENDING;
            })
            .addCase(fetchMovieById.fulfilled, (state, action) => {
                state.status = STATUS.SUCCESS;
                state.film = action.payload;
            })
            .addCase(fetchMovieById.rejected, (state) => {
                state.status = STATUS.ERROR;
            });
    },
});

export default moviesSlice.reducer;
export const selectMovies = (state: RootState) => state.movies.data;
export const selectStatus = (state: RootState) => state.movies.status;
export const selectOneFilm = (state: RootState) => state.movies.film;
