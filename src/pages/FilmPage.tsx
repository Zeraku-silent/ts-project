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
import { FC } from 'react';
import { IMovie } from '../store/movieReducer';
import { useParams } from 'react-router-dom';
import { useGetOneMovieByIdQuery } from '../store/api/api';

export const FilmPage: FC = () => {
    const { Id } = useParams();
    console.log(Id);

    const { data, isLoading, isError } = useGetOneMovieByIdQuery(Id);
    const film: IMovie = data;
    console.log(film);
    if (isError) {
        return (
            <Heading mt={20} textAlign={'center'}>
                Что-то мне не хорошо...Быть может в другой раз?
            </Heading>
        );
    }

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Box>
            <Grid
                gridTemplate={'rows'}
                gap={5}
                m={10}
                mr={'auto'}
                ml={'auto'}
                borderRadius={25}
                bg={'gray.600'}
                p={10}
            >
                <Heading textAlign={'center'}>{film.name}</Heading>
                <Flex direction={window.innerWidth > 600 ? 'row' : 'column'}>
                    <Image w={'30%'} borderRadius={25} src={film.poster.url} />
                    <Box
                        w={'30%'}
                        m={5}
                        // ml={'auto'}
                        // mr={'auto'}
                        borderRadius={10}
                        p={7}
                        bg={'gray.500'}
                    >
                        <Heading> О фильме</Heading>
                        <Text fontSize={'xl'} mt={5}>
                            <Text display={'inline-block'} fontWeight={'bold'}>
                                Год:{' '}
                            </Text>
                            {' ' + film.year}
                        </Text>
                        <Text mt={3} fontSize={'xl'}>
                            <Text display={'inline-block'} fontWeight={'bold'}>
                                Возрастной рейтинг:{' '}
                            </Text>
                            {film.ageRating ? ' ' + film.ageRating : ' 0+'}
                        </Text>
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
                <Text w={'30%'} borderRadius={15} bg={'gray.500'} p={5}>
                    {film.description}
                </Text>
            </Grid>
        </Box>
    );
};
