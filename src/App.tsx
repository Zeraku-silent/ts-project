/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { FC } from 'react';
import { MainMovieList } from './pages/mainMovieList';
import { Route, Routes } from 'react-router-dom';
import { FilmCard } from './components/filmCard';
import { FilmPage } from './pages/filmPage';

export const App: FC = () => {
    return (
        <Box>
            <Header />

            <Routes>
                <Route path="/" element={<MainMovieList />} />
                <Route path="/movie/:Id" element={<FilmPage />} />
            </Routes>
            <Box>{/* <MainMovieList /> */}</Box>
        </Box>
    );
};
