import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      disabled: 'grey',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
  },
  components: {
    MuiButtonGroup: {
      styleOverrides: {
        grouped: {
          '&:not(:last-of-type)': {
            borderColor: 'grey',
          },
        },
      },
    },
  },
});

export type ThemeType = typeof theme;
