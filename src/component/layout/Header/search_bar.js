import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { GoSearch } from 'react-icons/go';
import propType from 'prop-types';

function SearchBar({placeholder, ...rest}) {
    return (
        <InputGroup {...rest} w={{ base: '100%' }}>
            <InputLeftElement
                pointerEvents="none"
                children={<GoSearch color="gray.300" />}
            />
            <Input type="search" placeholder={placeholder} />
        </InputGroup>
    )
}

export default SearchBar;

SearchBar.propType = {
    placeholder: propType.string.isRequired
}
