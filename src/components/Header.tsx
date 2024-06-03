import { Flex, Image, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';
import { ThemeToggler } from '../ThemeToggler';
import { Serach } from './contorl/Search';
import kinolenta from '../assets/6651564.png';

export const Header: FC = () => {
    const { colorMode } = useColorMode();
    return (
        <Flex
            p={5}
            justifyContent={'space-between'}
            alignItems={'center'}
            h={100}
            bg={colorMode === 'light' ? '#e7eef3' : '#12161e'}
        >
            <Image boxSize="130px" src={kinolenta} />
            <Serach />
            <ThemeToggler />
        </Flex>
    );
};
