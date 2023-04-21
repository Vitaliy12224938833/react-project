import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Search } from '../Search';
import '@testing-library/jest-dom';

test('should render search form and input field', () => {
  const { getByTestId } = render(<Search />);
  const searchForm = getByTestId('SearchForm');
  expect(searchForm).toBeInTheDocument();
  const searchInput = getByTestId('SearchInput');
  expect(searchInput).toBeInTheDocument();
});

test('should not submit the search query when the user presses enter with an empty query', () => {
  const { getByTestId } = render(<Search />);
  const searchInput = getByTestId('SearchInput');
  const searchForm = searchInput.closest('form');
  jest.spyOn(searchForm, 'submit');
  fireEvent.keyPress(searchInput, { key: 'Enter', code: 13, charCode: 13 });
  expect(searchForm.submit).toHaveBeenCalledTimes(0);
});
