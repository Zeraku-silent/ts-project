import { Flex, Image, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';
import { ThemeToggler } from '../ThemeToggler';
import { Serach } from './contorl/Search';

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
            <Image boxSize="130px" src="src/resurces/6651564.png" />
            <Serach />
            <ThemeToggler />
        </Flex>
    );
};
