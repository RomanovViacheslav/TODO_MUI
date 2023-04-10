import React from 'react';
import { observer } from 'mobx-react';
import { List, Box, Typography } from '@mui/material';
import { TaskItem } from '../TaskItem';
import { TasksStoreInstance } from '../../store';
import { ListItem } from './TaskList.styled';
import { Loader } from 'components/index';

export function TaskListComponent() {
  const { isLoading, tasks, error, deleteTask, toggleTaskCompletion, toggleTaskImportance } = TasksStoreInstance;
  return (
    <Loader isLoading={isLoading}>
      {tasks ? (
        <Box>
          <List>
            {tasks.map((task) => (
              <ListItem key={task.id}>
                <TaskItem
                  clickIsImportant={toggleTaskImportance}
                  clickIsDone={toggleTaskCompletion}
                  deleteTask={deleteTask}
                  task={task}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <>
          <Typography>Что то не так...</Typography>
          {error && (
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          )}
        </>
      )}
    </Loader>
  );
}

export const TaskList = observer(TaskListComponent);
