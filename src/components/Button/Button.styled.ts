import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { StyledLinkProps } from './Button.types';

export const StyledButton = styled(Button)({
  width: '100%',
});

export const StyledLink = styled(Link)<StyledLinkProps>(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  padding: '6px 16px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '4px',
  boxShadow: 'none',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  width: '100%',
  textAlign: 'center',
}));
