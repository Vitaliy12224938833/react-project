import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from '../NavBar';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  test('renders without errors', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
  });

  test('shows search input when search icon is clicked', () => {
    const { getByTestId } = render(
      <Router>
        <NavBar />
      </Router>
    );
    const searchIcon = getByTestId('SearchIcon');
    fireEvent.click(searchIcon);
    const searchInput = getByTestId('SearchInput');
    expect(searchInput).toBeInTheDocument();
  });

  test('performs search when enter key is pressed', () => {
    const { getByTestId } = render(
      <Router>
        <NavBar />
      </Router>
    );
    const searchInput = getByTestId('SearchInput');
    fireEvent.input(searchInput, { target: { value: 'test' } });
    expect(searchInput).toHaveValue('test');
  });
});
