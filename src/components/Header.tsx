import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { ThemeToggler } from "../ThemeToggler";


export const Header:FC = () => {
    return(
        <Box bg={'white'}>
            <ThemeToggler/>
        </Box>
    )
}