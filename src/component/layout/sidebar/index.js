
import { Drawer, DrawerContent, DrawerOverlay, IconButton, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { useMediaQuery } from "@chakra-ui/react"
import { SidebarContent } from './sidebar-content';
import {AiOutlineBars} from 'react-icons/ai';

function Sidebar() {
    const sidebar = useDisclosure();
    const [isSmallerThan1280] = useMediaQuery('(max-width: 1280px)');

    return (
        <>
            <SidebarContent display={{ base: "none", md: "none", lg: "unset" }} />
            {isSmallerThan1280 &&   <IconButton position="absolute"  top="8px"
                                left="9px" onClick={sidebar.onToggle} aria-label="Open Navigation" icon={<AiOutlineBars />} />}
            <Drawer isOpen={sidebar.isOpen} size="xs" onClose={sidebar.onClose} placement="left">
                <DrawerOverlay />
                <DrawerContent>
                    <SidebarContent w="full" borderRight="none" />
                </DrawerContent>
            </Drawer>
        </>
        )
}

export default Sidebar;


