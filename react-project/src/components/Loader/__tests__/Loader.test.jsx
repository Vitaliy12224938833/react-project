import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from '../Loader';

describe('Loader', () => {
  test('renders CircularProgress', () => {
    const { getByRole } = render(<Loader />);
    const circularProgress = getByRole('progressbar');
    expect(circularProgress).toBeInTheDocument();
  });
});
