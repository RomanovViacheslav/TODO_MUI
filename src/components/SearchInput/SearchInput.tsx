import React, { ChangeEventHandler, MouseEvent } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { SearchInputProps } from './SearchInput.types';

export function SearchInput({ onChange, value, onReset, disabled, ...props }: SearchInputProps) {
  const onSearchInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => onChange(evt.target.value);

  const onResetBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (onReset) onReset();
  };

  return (
    <TextField
      disabled={disabled}
      value={value}
      placeholder="search"
      onChange={onSearchInputChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {value ? (
              <IconButton size="small" onClick={onResetBtnClick}>
                <ClearIcon />
              </IconButton>
            ) : (
              <SearchIcon />
            )}
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
