import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';

import { SearchIconWrapper } from './SearchIconWrapper';
import { StyledInputBase } from './StyledInputBase';
import SearchIcon from '@mui/icons-material/Search';
const SearchStyled = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const Search = () => {
  const [query, setQuery] = useState('');
  const searchHandlerChange = (e) => {
    setQuery(e.target.value);
  };
  const searchHandlerSubmit = (e) => {
    e.preventDefault();
    if (query) {
      window.location.href = `/search/multi/${query}`;
    }
  };
  return (
    <form data-testid='SearchForm' onSubmit={searchHandlerSubmit}>
      <SearchStyled>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          onChange={searchHandlerChange}
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search', 'data-testid': 'SearchInput' }}
          value={query}
        />
      </SearchStyled>
    </form>
  );
};
