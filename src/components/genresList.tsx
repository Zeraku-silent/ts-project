import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import { FC } from 'react';
import { useGetMoviesQuery } from '../store/api/api';
import { FilmCard } from './filmCard';

interface IProps {
    genre: string;
}

export const GenresList: FC<IProps> = ({ genre }) => {
    const { data, isLoading, isError } = useGetMoviesQuery(genre);
    const movies = data?.docs;

    if (isError) {
        return <Heading> Произошла ошибка</Heading>;
    }
    if (isLoading) {
        return <Spinner />;
    }
    return (
        <Box>
            <Heading>{genre.toUpperCase()}</Heading>
            <Flex mb={5} gap={3}>
                {movies
                    ? movies.map((movie) => (
                          <FilmCard key={movie.id} film={movie} />
                      ))
                    : null}
            </Flex>
        </Box>
    );
};
