import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { FilmCard } from './FilmCard';
import { useAppDispatch, useAppSelector } from '../store/hook';
import {
    fetchMovies,
    selectMovies,
    selectStatus,
} from '../store/moviesSlice/moviesSlice';
import { STATUS } from '../config/statuses';
import { IMovie } from '../models/movie';

interface IProps {
    genre: string;
}

export const GenresList: FC<IProps> = ({ genre }) => {
    const movies = useAppSelector(selectMovies);
    const status = useAppSelector(selectStatus);

    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(fetchMovies(genre));
    // }, [dispatch, genre]);

    if (status === STATUS.ERROR) {
        return <Heading> Фильмы украли пираты</Heading>;
    }
    if (status === STATUS.PENDING) {
        return <Spinner />;
    }
    return (
        <Box>
            <Heading>{genre.toUpperCase()}</Heading>
            <Flex mb={5} justify={'space-evenly'} gap={5}>
                {movies
                    ? movies.map((movie) =>
                          movie.genres.includes({ name: genre }) ? (
                              <FilmCard key={movie.id} film={movie} />
                          ) : null
                      )
                    : null}
            </Flex>
        </Box>
    );
};
