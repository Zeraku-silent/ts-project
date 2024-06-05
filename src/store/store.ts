import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './moviesSlice/moviesSlice';
import testEntitySlice from './testEntitySlice/entityAdpaterSlice';

export const store = configureStore({
    reducer: {
        movies: moviesSlice,
        todos: testEntitySlice,
        // [moviesApi.reducerPath]: moviesApi.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
