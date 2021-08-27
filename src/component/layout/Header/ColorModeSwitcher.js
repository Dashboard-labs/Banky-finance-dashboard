import React from 'react';
import { useColorMode, useColorModeValue, IconButton, Tooltip } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Tooltip placement="bottom" label={`Switch to ${text} mode`}>
      <IconButton
        size="sm"
        color="gray.500"
        fontSize="md"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        marginRight="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </Tooltip>
  );
};
