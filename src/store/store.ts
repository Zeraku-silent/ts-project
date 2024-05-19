import { configureStore } from '@reduxjs/toolkit';
// import movieReducer from './movieReducer';
import { moviesApi } from './api/api';

export const store = configureStore({
    reducer: {
        // movies: movieReducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
