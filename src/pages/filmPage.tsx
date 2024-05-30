import { Box, Grid, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { IMovie } from '../store/movieReducer';
import { useParams } from 'react-router-dom';

export const FilmPage: FC = () => {
    const { Id } = useParams();
    console.log(Id);

    return (
        <Box>
            <Grid>
                <Image />
            </Grid>
        </Box>
    );
};
