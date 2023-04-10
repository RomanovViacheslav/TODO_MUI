import React from 'react';
import { Typography } from '@mui/material';
import { AddTaskForm } from 'modules/index';

export function AddTaskPage() {
  return (
    <>
      <Typography variant="h3" component="h2">
        TODO LIST | ADD TASK
      </Typography>
      <AddTaskForm />
    </>
  );
}
