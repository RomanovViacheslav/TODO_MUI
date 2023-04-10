import React from 'react';
import { Typography } from '@mui/material';
import { Button } from 'components/index';
import { paths } from 'constants/index';
import { Tasks } from 'modules/index';

export function TasksPage() {
  return (
    <>
      <Typography variant="h3" component="h1">
        TODO LIST
      </Typography>
      <Tasks />
      <Button to={paths.ADD} text={'Add task'} />
    </>
  );
}
