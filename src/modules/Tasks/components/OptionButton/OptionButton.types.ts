import { IconButtonProps } from '@mui/material';

export interface OptionButtonProps {
  disabled?: boolean;
  to?: string;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  aria?: string;
  color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
}
