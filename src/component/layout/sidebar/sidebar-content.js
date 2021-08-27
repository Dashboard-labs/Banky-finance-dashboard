import React from 'react';
import { Box, Collapse, Flex, Icon, Stack, Text, useBoolean, useColorModeValue } from "@chakra-ui/react";
import { NavItem } from './nav-item';
import Logo from '../../Logo';
import { sidebar_elements } from './sidebar_nav_elements';
import { MdKeyboardArrowRight } from 'react-icons/md';

const SidebarItem = ({ name, section, cid }) => {
    const [isSubMenuOpen, setSubMenuOpen] = useBoolean(true);

    return (
        <Stack spacing={0} pt={cid !== 0 && 5} key={cid}>
            <NavItem onClick={setSubMenuOpen.toggle}>
                <Text color={useColorModeValue("baseColor.text_primary", "baseColor.text_primary.dark")}>{name}</Text>
                <Icon
                    as={MdKeyboardArrowRight}
                    color={useColorModeValue("baseColor.text_primary", "baseColor.text_primary.dark")}
                    ml="auto"
                    transition="transform 0.3s ease"
                    transform={isSubMenuOpen && "rotate(90deg)"}
                />
            </NavItem>
            <Collapse in={isSubMenuOpen}>
                {section?.map(({name, icon}, sid) => {
                    return <NavItem  icon={icon}  key={`section-${sid}`} >{name}</NavItem>;
                })}
            </Collapse>
        </Stack >
    )
}

export const SidebarContent = (props) => (
    <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        p="16px 0px 0px 5px"
        overflowX="hidden"
        overflowY="auto"
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("inherit", "gray.700")}
        borderRightWidth="1px"
        w="60"
        {...props}
    >
        <Logo withText={true} mb="5" display="flex"
            alignItems="center"
            marginLeft="12px"/>

        <Flex
            direction="column"
            as="nav"
            fontSize="sm"
            color="gray.600"
            aria-label="Main Navigation"
        >
            {sidebar_elements.map(({ category }, cid) => (
               <SidebarItem name={category.name} key={category?.name + cid} section={category.section}  cid={cid} />
            ))
            }
            {/* <NavItem icon={MdHome}>Home</NavItem> */}
            {/* <NavItem icon={FaRss}>Articles</NavItem>
        <NavItem icon={HiCollection}>Collections</NavItem>
        <NavItem icon={FaClipboardCheck}>Checklists</NavItem> */}
        </Flex>
    </Box>
);