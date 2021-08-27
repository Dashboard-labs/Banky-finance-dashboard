import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react';
import propTypes from 'prop-types';

function Logo(props) {
    const { withText, ...rest } = props;

    return (
        <Flex {...rest}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5359 5.99999C16.0755 3.33333 19.9245 3.33333 21.4641 6L30.1244 21C31.664 23.6667 29.7395 27 26.6603 27H9.33974C6.26054 27 4.33604 23.6667 5.87564 21L14.5359 5.99999Z" fill="#304858" />
                <circle cx="18" cy="18" r="4" fill="#F2F0F0" />
            </svg>

            <Text
                fontSize="19px"
                ml="2"
                color={useColorModeValue("gray.800", "white")}
                fontWeight="semibold">Banky finance</Text>
        </Flex>
    )
}

Logo.propTypes = {
    withText: propTypes.bool.isRequired
}

export default Logo
