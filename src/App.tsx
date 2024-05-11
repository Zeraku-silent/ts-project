/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { FC } from 'react';
import { MainMovieList } from './pages/mainMovieList';

export const App: FC = () => {
    return (
        <Box>
            <Header />
            <MainMovieList />
        </Box>
    );
};
