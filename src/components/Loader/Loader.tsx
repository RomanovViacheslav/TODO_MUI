import React from 'react';
import { CircularProgress } from '@mui/material';
import { LoaderProps } from './Loader.types';

export function Loader({ isLoading, children, variant = 'circle' }: LoaderProps) {
  return isLoading ? <CircularProgress color="primary" size={variant === 'dot' ? 20 : 60} /> : <>{children}</>;
}
