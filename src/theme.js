import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = {
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    styles: {
        global: (props) => ({
          body: {
            bg: mode('linear-gradient(rgb(247, 248, 254) 0%, rgb(231, 235, 246) 100%)','linear-gradient(rgb(49, 52, 67) 0%, rgb(23, 23, 26) 31.77%)')(props),
          }
        })
      },
};

export default extendTheme(theme);