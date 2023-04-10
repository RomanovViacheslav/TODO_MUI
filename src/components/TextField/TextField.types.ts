import { StandardTextFieldProps } from '@mui/material';

export interface TextFieldProps extends StandardTextFieldProps {
  inputType: string;
  errorText?: string;
}
