import {
    Box,
    Flex,
    Grid,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
    Text,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hook';
import {
    fetchMovieById,
    selectOneFilm,
    selectStatus,
} from '../store/moviesSlice/moviesSlice';
import { STATUS } from '../config/statuses';

export const FilmPage: FC = () => {
    const status = useAppSelector(selectStatus);
    const film = useAppSelector(selectOneFilm);

    const dispatch = useAppDispatch();

    const { Id } = useParams();

    useEffect(() => {
        dispatch(fetchMovieById(Id));
    }, [Id, dispatch]);

    if (status === STATUS.ERROR) {
        return (
            <Heading mt={20} textAlign={'center'}>
                Что-то мне не хорошо...Быть может в другой раз?
            </Heading>
        );
    }

    if (status === STATUS.PENDING) {
        return <Spinner />;
    }
    if (film)
        return (
            <Box>
                <Grid
                    gridTemplate={'rows'}
                    gap={5}
                    m={10}
                    mr={'auto'}
                    ml={'auto'}
                    borderRadius={25}
                    bg={'gray.700'}
                    p={10}
                >
                    <Heading textAlign={'center'}>{film.name}</Heading>
                    <Flex
                        direction={window.innerWidth > 600 ? 'row' : 'column'}
                    >
                        <Image
                            w={'25%'}
                            borderRadius={25}
                            src={film.poster.url}
                        />
                        <Box
                            w={'30%'}
                            m={5}
                            mt={0}
                            // ml={'auto'}
                            // mr={'auto'}
                            borderRadius={10}
                            p={7}
                            bg={'gray.500'}
                        >
                            <Heading> О фильме</Heading>
                            <Box fontSize={'xl'} mt={5}>
                                <Text
                                    display={'inline-block'}
                                    fontWeight={'bold'}
                                >
                                    Год:{' '}
                                </Text>
                                {' ' + film.year}
                            </Box>
                            <Box mt={3} fontSize={'xl'}>
                                <Text
                                    display={'inline-block'}
                                    fontWeight={'bold'}
                                >
                                    Возрастной рейтинг:{' '}
                                </Text>
                                {film.ageRating ? ' ' + film.ageRating : ' 0+'}
                            </Box>
                            <List mt={3} fontSize={'xl'}>
                                <Text fontWeight={'bold'}> Жанры:</Text>
                                {film.genres.map((genre) => (
                                    <ListItem key={genre.name}>
                                        {genre.name}
                                    </ListItem>
                                ))}
                            </List>
                            <Text mt={3} fontSize={'xl'}></Text>
                            <Text mt={3} fontSize={'xl'}></Text>
                        </Box>
                    </Flex>
                    <Text w={'25%'} borderRadius={15} bg={'gray.500'} p={5}>
                        {film.description}
                    </Text>
                </Grid>
            </Box>
        );
};
