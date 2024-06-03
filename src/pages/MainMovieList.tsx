import { Box } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import genresList from '../store/api/genresList.json';
import { GenresList } from '../components/GenresList';
import { useAppDispatch } from '../store/hook';
import { fetchMovies } from '../store/moviesSlice/moviesSlice';

const itemsOnPage = 3;

// const fetchMoreData = (page: number) => {
//     const arr = [];
//     for (let i = 0; i < itemsOnPage; i++) {
//         const idx = page * 3 + i;

//         if (idx >= genresList.length) {
//             break;
//         } else {
//             arr.push(genresList[idx]?.name);
//         }
//     }

//     return arr;
// };

export const MainMovieList: FC = () => {
    // , 'биография', 'боевик'
    const [genres, setGenres] = useState(['аниме']);
    const [page, setPage] = useState(0);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (
    //             document.documentElement.offsetHeight -
    //                 (window.innerHeight + document.documentElement.scrollTop) <
    //             100
    //         ) {
    //             const newGenres = fetchMoreData(page + 1);
    //             setGenres((genres) => [...genres, ...newGenres]);

    //             setPage(page + 1);
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [genres, page]);

    useEffect(() => {
        dispatch(fetchMovies('аниме'));
        console.log(import.meta.env.API_KEY);
    }, [dispatch]);

    return (
        <Box m={' auto'} alignItems={'center'}>
            {genres.map((genre) => (
                <Box key={genre} h={400}>
                    {' '}
                    <GenresList genre={genre} />
                </Box>
            ))}
        </Box>
    );
};
