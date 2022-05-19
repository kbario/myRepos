import { extendTheme } from '@chakra-ui/react';

const config = {
  useSystemColourMode: true,
};

const colors = {
  brand: {
    dark: '#27272A',
    blue: '#0369A1',
    orange: '#FED7AA',
    light: '#F4F4F5',
  },
};

const components = {
  Button: {
    variants: {
      fillBtn: {
        bg: 'brand.blue',
      },
      outlineBtn: {
        bg: 'brand.light',
      },
    },
  },
  Heading: {
    variants: {
      repocard: {
        fontSize: 'xl',
      },
    },
  },
};

const theme = extendTheme({ config, colors, components });

export default theme;
