import React from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { EditTaskForm } from 'modules/index';

export function EditTaskPage() {
  const { id } = useParams();
  return (
    <>
      <Typography variant="h4" component="h2">
        TODO LIST | EDIT TASK {id}
      </Typography>
      <EditTaskForm />
    </>
  );
}
