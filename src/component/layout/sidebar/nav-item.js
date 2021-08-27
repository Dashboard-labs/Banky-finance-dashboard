import React from 'react';
import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";

export const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    const IconColor = useColorModeValue("baseColor.text_gray", "gray.300")

    return (
      <Flex
        as="button"
        align="center"
        width="100%"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        alignItems="center"
        color={useColorModeValue("baseColor.text_gray", "gray.400")}
        _hover={{
          bg: useColorModeValue("gray.100", "gray.900"),
          color: useColorModeValue("gray.900", "gray.200"),
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            boxSize="4"
            _groupHover={{
              color: IconColor,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };