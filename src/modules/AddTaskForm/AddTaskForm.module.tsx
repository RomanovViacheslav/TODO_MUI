import React, { FormEvent, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { AddTasksStoreInstance } from './store';
import { Button, Checkbox, Loader, TextField } from 'components/index';
import { AddTaskEntity } from 'domains/index';
import { validateSchema } from 'helpers/index';
import { paths } from 'constants/paths';

function AddTaskFormComponent() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddTaskEntity>({
    resolver: yupResolver(validateSchema),
  });

  const { isLoading, addTask, error, resetIsSuccess, isSuccess } = AddTasksStoreInstance;
  useEffect(() => {
    if (isSuccess) {
      resetIsSuccess();
      navigate(paths.MAIN);
    }
  }, [isSuccess]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit((data: AddTaskEntity) => {
      addTask(data);
    })();
  };

  return (
    <>
      <Loader isLoading={isLoading}>
        <Box display="flex" flexDirection="column" gap="16px" mt="26px" component="form" onSubmit={onSubmit}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
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
            defaultValue=""
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
            defaultValue={false}
            render={({ field }) => <Checkbox label="Important" checked={field.value} onChange={field.onChange} />}
          />

          <Button text="Add task" type="submit" />
        </Box>
      </Loader>
      {error && (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      )}
    </>
  );
}

export const AddTaskForm = observer(AddTaskFormComponent);
