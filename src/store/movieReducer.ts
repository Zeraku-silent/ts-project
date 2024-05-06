import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchMovieById } from './asyncMoviesRequest';

export interface IMovie {
    id: string | number;
    name: string;
    year: number;
    poster: {
        url: string;
        previewUrl: string;
    };
}

type IState = {
    movies: IMovie[];
};
const initialState: IState = {
    movies: [],
};

const movieReducer = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchMovieById.fulfilled,
            (state, action: PayloadAction<IMovie>) => {
                state.movies.push(action.payload);
            }
        );
    },
});

export default movieReducer.reducer;
