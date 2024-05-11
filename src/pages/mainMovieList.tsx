import { Box, Flex } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { fetchMovieById } from '../store/asyncMoviesRequest';

export const MainMovieList: FC = () => {
    const movies = useAppSelector((state) => state.movies);
    const dispatch = useAppDispatch();
    console.log(movies.movies);

    useEffect(() => {
        dispatch(fetchMovieById());
    }, [dispatch]);
    return (
        <Box w={'70%'} alignItems={'center'}>
            <Flex flexDirection={'column'} justify={'center'}>
                {movies.movies
                    ? movies.movies.map((movie) => (
                          <Box key={movie.id}>
                              {/* {movie.year} */}
                              {movie.name}
                              {/* <Image h={'500'} src={`${movie.poster.url}`} /> */}
                          </Box>
                      ))
                    : 'no'}
            </Flex>
        </Box>
    );
};
