import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from './StyledComponents';
import { ButtonProps } from './Button.types';

export function Button({ onClick, type = 'button', text, to }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      onClick && onClick();
    }
  };

  return (
    <StyledButton variant="contained" onClick={handleClick} type={type}>
      {text}
    </StyledButton>
  );
}
