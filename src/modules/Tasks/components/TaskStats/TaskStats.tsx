import React from 'react';
import { observer } from 'mobx-react';
import { Typography } from '@mui/material';
import { TasksStoreInstance } from '../../store';
import { Counter, StatsContainer, ListItem } from './TaskStats.styled';
import { Loader } from 'components/index';

function TasksStatsComponent() {
  const { isLoading, tasksStats } = TasksStoreInstance;

  if (!tasksStats) {
    return <Typography>Stats is not available</Typography>;
  }

  return (
    <StatsContainer>
      {Object.entries(tasksStats).map(([key, value]) => (
        <ListItem key={key}>
          <Typography>{key.charAt(0).toUpperCase() + key.slice(1)}:</Typography>
          <Loader isLoading={isLoading} variant="dot">
            <Counter label={value} variant="outlined" />
          </Loader>
        </ListItem>
      ))}
    </StatsContainer>
  );
}

export const TasksStats = observer(TasksStatsComponent);
