import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from '../Loader';
import '@testing-library/jest-dom';

describe('Loader', () => {
  test('renders CircularProgress', () => {
    const { getByRole } = render(<Loader />);
    const circularProgress = getByRole('progressbar');
    expect(circularProgress).toBeInTheDocument();
  });
});
