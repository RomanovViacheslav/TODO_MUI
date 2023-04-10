import { CssBaseline } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'router/index';
import { theme } from 'src/theme/index';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
