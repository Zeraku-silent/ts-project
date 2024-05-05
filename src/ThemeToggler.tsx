import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Icon, useColorMode } from '@chakra-ui/react';

export const ThemeToggler = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box>
            <Button
                p={0}
                bg={colorMode === 'light' ? '#1a202c' : '#f1f9fb'}
                onClick={toggleColorMode}
            >
                {colorMode === 'light' ? (
                    <Icon color={'white'} as={MoonIcon} />
                ) : (
                    <Icon color={'#1a202c'} as={SunIcon} />
                )}
            </Button>
        </Box>
    );
};
