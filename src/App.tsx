/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { FC } from 'react';
import { MainMovieList } from './pages/MainMovieList';
import { Route, Routes } from 'react-router-dom';
import { FilmPage } from './pages/FilmPage';

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
