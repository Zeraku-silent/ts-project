import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchMovieById } from './asyncMoviesRequest';

export interface IMovie {
    id: string | number;
    name: string;
    alternativeName?: string;
    year: number;
    poster: {
        url: string;
        previewUrl: string;
    };
    description: string;
    ageRating: number | null;
    genres: [
        {
            name: string;
        }
    ];
}

type IMovieFetch = {
    docs: IMovie[];
    total: number;
    limit: number;
    page: number;
    pages: number;
};

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
            (state, action: PayloadAction<IMovie[]>) => {
                state.movies = action.payload;
            }
        );
    },
});

export default movieReducer.reducer;
