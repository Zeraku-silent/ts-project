import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { IMovie } from '../store/movieReducer';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hook';
import { selectStatus } from '../store/moviesSlice/moviesSlice';
import { STATUS } from '../config/statuses';
interface IProps {
    film: IMovie;
}

export const FilmCard: FC<IProps> = ({ film }) => {
    return (
        // <Card w={60}>
        //     <CardHeader>
        //         <Image src={film.poster.url} />
        //     </CardHeader>
        //     <CardBody textAlign={'center'}>
        //         <Text>{film.name}</Text>
        //     </CardBody>
        //     <Button>
        //         <Link to={'/movie/' + film.id}>Подробнее...</Link>
        //     </Button>
        // </Card>
        <p>xex</p>
    );
};
