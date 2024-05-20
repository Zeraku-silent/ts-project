import { Card, CardBody, CardHeader, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { IMovie } from '../store/movieReducer';
interface IProps {
    film: IMovie;
}

export const FilmCard: FC<IProps> = ({ film }) => {
    return (
        <Card w={60}>
            <CardHeader>
                <Image src={film.poster.url} />
            </CardHeader>
            <CardBody textAlign={'center'}>
                <Text>{film.name}</Text>
            </CardBody>
        </Card>
    );
};
