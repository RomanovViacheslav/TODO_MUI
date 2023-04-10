import React from 'react';
import { Typography } from '@mui/material';
import { EditTaskForm } from 'modules/index';

export function EditTaskPage() {
  return (
    <>
      <Typography variant="h3" component="h2">
        TODO LIST | EDIT TASK
      </Typography>
      <EditTaskForm />
    </>
  );
}
