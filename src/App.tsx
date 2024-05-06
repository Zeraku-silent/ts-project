/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Image, Text } from '@chakra-ui/react';
import { Header } from './components/Header';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hook';
import { fetchMovieById } from './store/asyncMoviesRequest';

export const App: FC = () => {
    const movies = useAppSelector((state) => state.movies);
    const dispatch = useAppDispatch();
    console.log(movies.movies);

    useEffect(() => {
        dispatch(fetchMovieById(401));
    }, [dispatch]);
    return (
        <Box>
            <Header />
            <Box>
                {movies.movies
                    ? movies.movies.map((movie) => (
                          <Box key={movie.id}>
                              {movie.year}
                              {movie.name}
                              <Image h={'500'} src={`${movie.poster.url}`} />
                          </Box>
                      ))
                    : 'no'}
            </Box>
        </Box>
    );
};
