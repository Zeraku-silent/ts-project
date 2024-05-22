import { SearchIcon } from '@chakra-ui/icons';
import { IconButton, Input, Stack, useColorMode } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { debounce } from '../../config';

export const Serach: FC = () => {
    const { colorMode } = useColorMode();
    const [inputText, setInputText] = useState('');

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = debounce(
        (e) => {
            setInputText(e.target.value);
            console.log(e.target.value);
        }
    );

    return (
        <Stack w={'40%'} direction={'row'}>
            <Input
                onChange={handleChange}
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
