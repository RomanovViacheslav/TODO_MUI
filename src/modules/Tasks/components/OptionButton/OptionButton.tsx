import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { OptionButtonProps } from './OptionButton.types';

export function OptionButton({
  disabled,
  to,
  onClick,
  startIcon,
  color = 'primary',
  aria,
  ...props
}: OptionButtonProps) {
  if (to) {
    return (
      <IconButton component={Link} to={to} {...props} aria-label={aria} color={color} size="large">
        {startIcon}
      </IconButton>
    );
  }

  return (
    <IconButton color={color} size="large" disabled={disabled} onClick={onClick} {...props} aria-label={aria}>
      {startIcon}
    </IconButton>
  );
}
