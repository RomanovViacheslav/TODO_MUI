import React, { memo } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { SearchFiltersProps } from './SearchFilters.types';

import { FiltersType } from 'domains/index';
import { FILTER_OPTIONS } from 'constants/index';

function SearchFiltersComponent({ onChange, disabled, filters }: SearchFiltersProps) {
  const onFilterChange = ({ isImportant, isDone }: FiltersType) => {
    if (!disabled) {
      const newFilters: FiltersType = {};
      if (isImportant !== undefined) newFilters.isImportant = isImportant;
      if (isDone !== undefined) newFilters.isDone = isDone;
      onChange(newFilters);
    }
  };

  return (
    <ButtonGroup variant="contained" aria-label="Filters button group">
      {Object.entries(FILTER_OPTIONS).map(([name, filter]) => (
        <Button
          type="button"
          variant="text"
          color={JSON.stringify(filters) === JSON.stringify(filter) ? 'primary' : 'inherit'}
          key={name}
          disabled={disabled}
          onClick={() => onFilterChange(filter)}>
          {name}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export const SearchFilters = memo(SearchFiltersComponent);
