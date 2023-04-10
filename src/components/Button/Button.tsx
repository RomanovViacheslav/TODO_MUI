import React from 'react';
import { StyledButton, StyledLink } from './Button.styled';
import { ButtonProps } from './Button.types';

export function Button({ onClick, type = 'button', text, to }: ButtonProps) {
  return to ? (
    <StyledLink to={to}>{text}</StyledLink>
  ) : (
    <StyledButton variant="contained" onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
}
