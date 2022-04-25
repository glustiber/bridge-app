import React from "react";
import { Box, Image, Button, Select, Text, Input, Icon, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider } from '@chakra-ui/react';
import { UpDownIcon, ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';

const BridgeSelect = ({ bridgeOptions, selected, onSelectedChange }) => {
    const mappedBridgeOptions = bridgeOptions.map(option => {
        return (
            <MenuItem key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                <Image src={option.logo} w="25px" h="25px" mr="10px"/> {option.label}
            </MenuItem>
        )
    })
    return (
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    <Image src={selected.logo} w="25px" h="25px" mr="10px" float="left"/> {selected.label}
                </MenuButton>
                <MenuList>
                    {mappedBridgeOptions}
                </MenuList>
            </Menu>
      )
}

export default BridgeSelect;