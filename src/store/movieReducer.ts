import { buildCreateSlice, createSlice } from '@reduxjs/toolkit';

export interface IMovie {
    id: string | number;
    name: string;
    year: number;
    poster: {
        url: string;
        previewUrl: string;
    };
}

const initialState: IMovie[] = [];

export const movieReducer = createSlice({
    name: 'movies',
    initialState,
    reducers:{},
    extraReducers:{buildCreateSlice}
    },
});

