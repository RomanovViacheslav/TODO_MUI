import { Checkbox as CheckboxMUI, FormControlLabel } from '@mui/material';
import { CheckboxProps } from './Checkbox.types';

export function Checkbox({ label, checked, onChange, disabled, ...props }: CheckboxProps) {
  return (
    <FormControlLabel
      control={<CheckboxMUI disabled={disabled} checked={checked} onChange={onChange} {...props} />}
      label={label}
    />
  );
}
