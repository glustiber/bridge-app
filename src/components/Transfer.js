import React, { useState, useControllableState } from 'react';
import { Box, Image, Button, Select, Text, Input, Icon, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor, 
    useColorModeValue,
    Tooltip,
    HStack,
    InputGroup,
    InputRightElement,
    InputLeftElement
    } from '@chakra-ui/react';
import { UpDownIcon, ChevronDownIcon, HamburgerIcon, PlusSquareIcon, InfoIcon } from '@chakra-ui/icons';
import BridgeSelect from './BridgeSelect';
import ethLogo from '../assets/eth.png';
import bscLogo from '../assets/bsc.png';

const bridgeOptions = [
    {
        label: "Ethereum Mainnet",
        value: "eth",
        logo: ethLogo,
    },
    {
        label: "Binance Smart Chain",
        value: "bsc",
        logo: bscLogo,
    },
]

function Transfer() {
    const [bridgeFrom, setBridgeFrom] = useState(bridgeOptions[0]);
    const [bridgeTo, setBridgeTo] = useState(bridgeOptions[1]);

    const [value, setValue] = useState(1);
    const handleChange = (event) => setValue(event.target.value);
    

    const swapHandler = () => {
    
        const from = bridgeFrom;
        const to = bridgeTo;

        setBridgeFrom(to);
        setBridgeTo(from);

      };
    
    const bg = useColorModeValue('white', 'rgb(35, 37, 48)');
    const inputBg = useColorModeValue('rgb(245, 247, 252)', 'rgb(23, 23, 26)');

    return <>
        <Box borderWidth='1px' borderRadius='10px' overflow='hidden' p="50px" bg={bg}>
            <Box overflow='hidden' p="10px">
                <Box display='flex' alignItems='center' mb="10px" justifyContent='space-between'>
                    <Box display='flex' alignItems='center'>
                        <Text w="12">From</Text>
                        <BridgeSelect
                            bridgeOptions={bridgeOptions}
                            selected={bridgeFrom}
                            onSelectedChange={setBridgeFrom}
                        />  
                    </Box>
                    <Popover direction='rtl'>
                        <PopoverTrigger>
                            <PlusSquareIcon position='relative' w='7' h='5' cursor='pointer'/>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow/>
                            <PopoverCloseButton/>
                            <PopoverHeader>Slippage tolerance 
                                <Tooltip label='The transfer won’t go through if the bridge rate moves unfavorably by more than this percentage when the transfer is executed.'>
                                    <InfoIcon ml='5px'/>
                                </Tooltip>
                            </PopoverHeader>
                            <PopoverBody display='flex'>
                                <Button flex='1 0 20%' mr='2px' onClick={() => setValue(0.3)}>0.3%</Button>
                                <Button flex='1 0 20%' mr='2px' onClick={() => setValue(0.5)}>0.5%</Button>
                                <Button flex='1 0 20%' mr='2px' onClick={() => setValue(1)}>1%</Button>
                                <InputGroup flex='1 0 25%'>
                                    <Input placeholder={value} value={value} onChange={handleChange} />
                                    <InputRightElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.2em'
                                        children='%'
                                    />
                                </InputGroup>
                                
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    
                </Box>
                <Box p='15px 0px' bg={inputBg} borderRadius='16px'>
                    <Box color='rgb(143, 155, 179)' display='flex' p='0px 12px' mt='3px' alignItems='center' justifyContent='space-between'>
                        <Box>Send:</Box>
                        <Box>Max: 0</Box>
                    </Box>
                    <Box display='flex' p='0px 12px' fontSize='20px' mt='18px' alignItems='center' justifyContent='space-between'>
                        <Box flex='2 1 0%' float='left'>
                            <Input focusBorderColor='transparent' placeholder="0.0" border='0px' />
                        </Box>
                        <Box flex='1 1 0%' position='relative'>

                        </Box>
                    </Box>
                    
                </Box>
                    
            </Box>
            <Box m='20px' display='flex' alignItems='center' justifyContent='center'>
                <Button onClick={swapHandler}>
                    <UpDownIcon w="5" h="5"/>
                </Button>
            </Box>
            <Box overflow='hidden' p="10px">
                <Box display='flex' alignItems='center' mb="10px">
                    <Text w="12">To</Text>
                    <BridgeSelect
                        bridgeOptions={bridgeOptions}
                        selected={bridgeTo}
                        onSelectedChange={setBridgeTo}
                    />
                </Box>
                <Box p='15px 0px' bg={inputBg} borderRadius='16px'>
                    <Box color='rgb(143, 155, 179)' display='flex' p='0px 12px' mt='3px' alignItems='center' justifyContent='space-between'>
                        <Box>
                        <Tooltip label='This amount is estimated based on the current bridge rate and fees.'>
                            <InfoIcon ml='5px' mr='5px'/>
                        </Tooltip>Receive (estimated):
                        </Box>
                    </Box>
                    <Box display='flex' p='0px 12px' fontSize='20px' mt='18px' alignItems='center' justifyContent='space-between'>
                        <Box flex='2 1 0%' float='left'>
                            <Input focusBorderColor='transparent' placeholder="0.0" border='0px'/>
                        </Box>
                        <Box flex='1 1 0%' position='relative'>

                        </Box>
                    </Box>
                    
                </Box>
            </Box>
            
            <Button colorScheme="blue" width="100%" >Connect wallet</Button>
        </Box>
    </>;
}

export default Transfer;