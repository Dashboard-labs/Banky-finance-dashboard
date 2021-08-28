import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props) => ({
        body: {
            fontFamily: 'body',
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('baseColor.bg_light', 'baseColor.bg_dark')(props),
            transition: "background .4s ease-in-out",
        },
        html: {
            minH: "100%",
        }
    })
}

export default styles;