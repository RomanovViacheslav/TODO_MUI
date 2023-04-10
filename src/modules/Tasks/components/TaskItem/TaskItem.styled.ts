import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import { TypographyProps, BoxProps } from './TaskItem.types';

export const Title = styled(Typography)<TypographyProps>(({ theme, done, important }) => ({
  textDecoration: done === 'true' ? 'line-through' : 'none',
  color: done === 'true' ? theme.palette.text.disabled : important === 'true' ? 'orange' : 'inherit',
}));

export const Description = styled(Typography)<TypographyProps>(({ theme, done, important }) => ({
  textDecoration: done === 'true' ? 'line-through' : 'none',
  color: done === 'true' ? theme.palette.text.disabled : important === 'true' ? 'orange' : 'inherit',
}));

export const TaskContainer = styled(Box)<BoxProps>(({ theme }) => ({
  border: `1px solid ${theme.palette.action.selected}`,
  borderRadius: '5px',
  marginTop: '10px',
  padding: '10px',
  wordWrap: 'break-word',
  width: '100%',
  background: `${theme.palette.action.hover}`,
}));
