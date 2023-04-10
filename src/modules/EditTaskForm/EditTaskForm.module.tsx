import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react';
import { Typography, Box } from '@mui/material';
import { EditTasksStoreInstance } from './store';
import { Button, Checkbox, Loader, TextField } from 'components/index';
import { TaskUpdateEntity } from 'domains/index';
import { validateSchema } from 'helpers/index';
import { paths } from 'constants/index';

function EditTaskFormComponent() {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);
  const { id } = useParams();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskUpdateEntity>({
    resolver: yupResolver(validateSchema),
  });

  const { isLoading, editTask, error, task, isSuccess, loadTask, resetIsSuccess } = EditTasksStoreInstance;

  useEffect(() => {
    if (id) {
      loadTask(id);
    }
  }, [id]);

  useEffect(() => {
    if (task) {
      reset(task);
    }
  }, [task]);

  useEffect(() => {
    if (isSuccess) {
      resetIsSuccess();
      navigate(paths.MAIN);
    }
  }, [isSuccess]);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit((data: TaskUpdateEntity) => {
      const updatedTask = {
        ...data,
      };
      editTask(updatedTask, id as string);
    })();
  };

  return (
    <Loader isLoading={isLoading}>
      {task ? (
        <Box display="flex" flexDirection="column" gap="16px" mt="26px" component="form" onSubmit={onSubmit}>
          <Controller
            name="name"
            control={control}
            defaultValue={task.name}
            render={({ field }) => (
              <TextField
                inputType="text"
                label="Task name"
                placeholder="Task name"
                value={field.value}
                onChange={field.onChange}
                errorText={errors.name?.message}
              />
            )}
          />

          <Controller
            name="info"
            control={control}
            defaultValue={task.info}
            render={({ field }) => (
              <TextField
                inputType="text"
                label="What to do(description)"
                placeholder="What to do(description)"
                value={field.value}
                onChange={field.onChange}
                errorText={errors.info?.message}
              />
            )}
          />

          <Controller
            name="isImportant"
            control={control}
            defaultValue={task?.isImportant}
            render={({ field }) => (
              <Checkbox
                label="Important"
                checked={field.value && !isCompleted}
                onChange={field.onChange}
                disabled={isCompleted}
              />
            )}
          />

          <Controller
            name="isDone"
            control={control}
            defaultValue={task.isImportant}
            render={({ field }) => (
              <Checkbox
                label="Completed"
                checked={field.value}
                onChange={(e) => {
                  setIsCompleted(e.target.checked);
                  field.onChange(e);
                }}
              />
            )}
          />

          <Button text="Edit task" type="submit" />
          {error && (
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          )}
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

export const EditTaskForm = observer(EditTaskFormComponent);
