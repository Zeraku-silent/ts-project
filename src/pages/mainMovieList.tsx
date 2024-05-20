import { Box, Card, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
// import { useAppDispatch } from '../store/hook';
// import { fetchMovieById } from '../store/asyncMoviesRequest';
import { useGetMoviesQuery } from '../store/api/api';
import { GenresList } from '../components/genresList';

export const MainMovieList: FC = () => {
    const { data, error, isLoading } = useGetMoviesQuery('комедия');
    const genres = ['боевик', 'комедия', 'мультфильм'];
    console.log(isLoading);
    console.log(error);

    return (
        <Box m={' auto'} alignItems={'center'}>
            {genres.map((genre) => (
                <GenresList key={genre} genre={genre} />
            ))}
        </Box>
    );
};
