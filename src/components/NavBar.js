import { Box, Image, Button, Link, useColorMode } from '@chakra-ui/react';
import brandLogo from '../assets/lifechain_H.png';
import brandLogoWhite from '../assets/lifechain_H_White.png';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react';
  import { ChevronDownIcon, SunIcon, MoonIcon, HamburgerIcon } from '@chakra-ui/icons';
  import DropdownMenu from './DropdownMenu';
  import {  Flex,  HStack , chakra } from '@chakra-ui/react';
//import {Link} from 'react-scroll';
//import data from './header.data';
import React from "react";
const CTA = "Get Started"



function NavBar() {
    const {colorMode, toggleColorMode} = useColorMode();
    return <>
        <header>
            <Flex
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between"
            >
                <Box>
                    {colorMode === 'dark' 
                    ? <Image height="50px" mt="15px" src={brandLogoWhite} alt="Brand"/> 
                    : <Image height="50px" mt="15px" src={brandLogo} alt="Brand"/>}
                    
                </Box>
                {/* <HStack as="nav" spacing="5">
                    <Button pr={3} colorScheme="gray.600" font-size="sm" variant="link" >Transfer</Button>
                    <Button colorScheme="gray.600" font-size="sm" variant="link" >Liquidity</Button>
                </HStack> */}
                <Box>
                    <Button colorScheme="blue">Connect wallet</Button>
                    <Button m="2" onClick={toggleColorMode}>
                        {colorMode === 'dark' 
                        ? <SunIcon/> 
                        : <MoonIcon/>}
                    </Button>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            <HamburgerIcon w={6} h={6}/>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Docs</MenuItem>
                            <MenuItem>Tutorial</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                            <MenuItem>Contact</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </header>
    </>;
}

export default NavBar;