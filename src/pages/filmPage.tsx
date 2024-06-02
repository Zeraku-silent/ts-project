import { Box, Grid, Image } from '@chakra-ui/react';
import { FC } from 'react';
import { IMovie } from '../store/movieReducer';
import { useParams } from 'react-router-dom';
import { useGetOneMovieByIdQuery } from '../store/api/api';

interface IProps {
    film: IMovie;
}

export const FilmPage: FC<IProps> = ({ film }) => {
    const Id = useParams();
    // console.log(film.id);

    const { data, isLoading, isError } = useGetOneMovieByIdQuery(Id);
    console.log(data);

    return (
        <Box>
            <Grid>
                <Image />
            </Grid>
        </Box>
    );
};
