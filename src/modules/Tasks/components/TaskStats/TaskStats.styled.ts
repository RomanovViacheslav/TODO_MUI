import styled from '@emotion/styled';
import { Chip, List, ListItem as ListItemMUI } from '@mui/material';
import { textAlign } from '@mui/system';

export const Counter = styled(Chip)({
  backgroundColor: 'rgba(255, 255, 255, 0.16)',
  color: '#fff',
  fontWeight: 'bold',
  borderRadius: '5px',
});

export const StatsContainer = styled(List)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  fontSize: 0,
  paddingTop: '10px',
});

export const ListItem = styled(ListItemMUI)({
  display: 'inline-block',
  padding: 0,
  '&:nth-of-type(1)': {
    textAlign: 'left',
  },
  '&:nth-of-type(2)': {
    textAlign: 'center',
  },
  '&:nth-of-type(3)': {
    textAlign: 'right',
  },
});
