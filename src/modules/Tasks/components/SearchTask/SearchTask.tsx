import React, { FormEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { SearchFilters } from '../SearchFilters';
import { TasksStoreInstance } from '../../store';
import { FiltersType, SearchFilterTaskEntity } from 'domains/index';
import { SearchInput } from 'components/index';

export function SearchTask() {
  const { isLoading, loadTasks } = TasksStoreInstance;
  const { control, handleSubmit, setValue } = useForm<SearchFilterTaskEntity>({
    defaultValues: { filters: {} },
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit((data: SearchFilterTaskEntity) => {
      loadTasks(data);
    })();
  };

  const onSearchInputChange = (value: string) => setValue('name_like', value);

  const handleFilterChange = ({ isImportant, isDone }: FiltersType) => {
    const filters: FiltersType = {};
    if (isImportant !== undefined) {
      filters.isImportant = isImportant;
    }
    if (isDone !== undefined) {
      filters.isDone = isDone;
    }
    setValue('filters', filters);
  };

  const onSearchInputReset = () => setValue('name_like', '');

  return (
    <Box display="flex" justifyContent={'space-between'} component={'form'} onSubmit={onSubmit}>
      <Controller
        name="name_like"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <SearchInput
            value={field.value || ''}
            onChange={onSearchInputChange}
            onReset={onSearchInputReset}
            disabled={isLoading}
          />
        )}
      />
      <Controller
        name="filters"
        control={control}
        render={({ field }) => (
          <SearchFilters filters={field.value} disabled={isLoading} onChange={handleFilterChange} />
        )}
      />
      <Button variant="contained" type="submit">
        Find
      </Button>
    </Box>
  );
}
