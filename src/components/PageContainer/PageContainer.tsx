import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export function PageContainer() {
  return (
    <Box maxWidth="650px" margin="2rem auto 0 auto" mb="16px" component="div">
      <Outlet />
    </Box>
  );
}
