import React from 'react';
import { Delete, Edit, Check, WarningOutlined } from '@mui/icons-material';
import { OptionButton } from '../OptionButton';
import { TaskItemProps } from './TaskItem.types';
import { Title, Description, TaskContainer } from './TaskItem.styled';
import { paths } from 'constants/paths';

export function TaskItem({ task, deleteTask, clickIsDone, clickIsImportant }: TaskItemProps) {
  const { name, info, isImportant, isDone, id } = task;

  const editBtnLink = `${paths.EDIT}/${id}`;

  const handleDelete = () => deleteTask(id);
  const handleIsDone = () => clickIsDone(id, isDone);
  const handleIsImportant = () => clickIsImportant(id, isImportant);

  return (
    <TaskContainer>
      <Title important={String(isImportant)} variant="body1" done={String(isDone)}>
        {name}
      </Title>
      <Description important={String(isImportant)} variant="body2" done={String(isDone)}>
        {info}
      </Description>
      <OptionButton
        disabled={isDone}
        onClick={handleIsImportant}
        startIcon={<WarningOutlined />}
        aria="Important Task"
        color={isImportant ? 'warning' : undefined}
      />
      <OptionButton
        color={isDone ? 'error' : undefined}
        startIcon={<Check />}
        onClick={handleIsDone}
        aria="Done Task"
      />
      <OptionButton startIcon={<Delete />} onClick={handleDelete} aria="Delete Task" />
      <OptionButton startIcon={<Edit />} to={editBtnLink} aria="Edit Task" />
    </TaskContainer>
  );
}
