import { Box, Card, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import { FC } from 'react';
// import { useAppDispatch } from '../store/hook';
// import { fetchMovieById } from '../store/asyncMoviesRequest';
import { useGetMoviesQuery } from '../store/api/api';

export const MainMovieList: FC = () => {
    // const movies = useAppSelector((state) => state.movies);
    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(fetchMovieById());
    // }, [dispatch]);
    const { data, error, isLoading } = useGetMoviesQuery('');
    console.log(data?.docs);
    const movies = data?.docs;

    return (
        <Box m={' auto'} w={'60%'} alignItems={'center'}>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <Spinner />
            ) : movies ? (
                <Flex mt={10} wrap={'wrap'} justify={'space-between'} gap={10}>
                    {movies.map((movie) => (
                        <Card key={movie.id}>
                            <Text w={40} textOverflow={'ellipsis'}>
                                {' '}
                                {movie.name
                                    ? movie.name
                                    : movie.alternativeName}
                            </Text>
                            <Image
                                minW={40}
                                maxW={40}
                                minH={60}
                                maxH={60}
                                src={`${movie.poster.url}`}
                            />
                        </Card>
                    ))}
                </Flex>
            ) : null}
        </Box>
    );
};
