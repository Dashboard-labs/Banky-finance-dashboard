import React from 'react';
import SearchBar from './search_bar';
import Profile from './profile';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

function Header({children, ...props}) {
    return (
        <Box  transition=".3s ease">
          <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg={useColorModeValue("white", "gray.800")}
            // borderBottomWidth="1px"
            // borderColor={useColorModeValue("inherit", "gray.700")}
            h="14"
          >
            {/* <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={sidebar.onOpen}
              icon={<FiMenu />}
              size="sm"
            /> */}

            <Profile/>
          </Flex>
        </Box>
    )
}
export default Header
