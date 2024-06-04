import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './moviesSlice/moviesSlice';

export const store = configureStore({
    reducer: {
        movies: moviesSlice,
        // [moviesApi.reducerPath]: moviesApi.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
