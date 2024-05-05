import { SearchIcon } from '@chakra-ui/icons';
import { IconButton, Input, Stack, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';

export const Serach: FC = () => {
    const { colorMode } = useColorMode();
    return (
        <Stack w={'40%'} direction={'row'}>
            <Input
                color={colorMode === 'light' ? '#f1f9fb' : '#1a202c'}
                bg={colorMode === 'light' ? '#808fad' : '#f1f9fb'}
                size="md"
            />
            <IconButton
                bg={colorMode === 'light' ? '#1a202c' : '#f1f9fb'}
                aria-label="Search database"
                icon={
                    <SearchIcon
                        color={colorMode === 'light' ? '#f1f9fb' : '#1a202c'}
                    />
                }
            />
        </Stack>
    );
};
