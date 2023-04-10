import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps } from './TextField.types';

export function TextField({
  label,
  placeholder,
  inputType = 'text',
  value,
  onChange,
  errorText,
  ...props
}: TextFieldProps) {
  return (
    <MuiTextField
      label={label}
      type={inputType}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={!!errorText}
      helperText={errorText}
      {...props}
    />
  );
}
