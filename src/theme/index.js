import styles from './styles';
import {fonts} from './fonts';
import { extendTheme } from '@chakra-ui/react';

const baseColor = {
    bg_primary: "#1E1671",
    text_primary: "#3629B7",
    text_primary_dark: "#9187f3",
    text_gray: "#838383",
    secondary: "#1573FF",
    tertiary: "#4EB4FF",
    bg_dark: "#121212",
    bg_light: "#FFFFFF",
    bg_gray: "#F8F9FB",
}

const config = {
    useSystemColorMode: false,
    initialColorMode: "light",
}

const overrides = {
    colors: {
        baseColor,
    },
    config,
    styles,
    fonts,
}

const theme = extendTheme(overrides);

export default theme;