import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../config/api';
import { getMoviesQuery } from './getMoviesQuery';
import { STATUS } from '../../config/statuses';
import { IMovieFetch, IMovie } from '../../models/movie';

interface IState {
    status: STATUS;
    data: IMovie[];
}

const initialState: IState = {
    status: STATUS.IDLE,
    data: [],
};

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (genre: string) => {
        const response = await client.get<IMovieFetch>(getMoviesQuery(genre));
        console.log(response);

        return response.data.docs;
    }
);

export const moviesSlice = createSlice({
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
                state.data = action.payload;
            });
    },
});
