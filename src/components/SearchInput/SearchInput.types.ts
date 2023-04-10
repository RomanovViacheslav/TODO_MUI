import { StandardTextFieldProps } from '@mui/material';

export interface SearchInputProps extends Omit<StandardTextFieldProps, 'onChange'> {
  onChange: (text: string) => void;
  onReset?: () => void;
}
