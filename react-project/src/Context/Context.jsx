import { createContext } from 'react';

export const MediaTypeForLinkContext = createContext(null);
export const SearcMediaTypeContext = createContext(null);
export const ItemClassNameContext = createContext(null);

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#f27405' },
    secondary: { main: '#fefefe' },
  },
});
