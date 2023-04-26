import React from 'react';
import { render } from '@testing-library/react';
import { DetailsWrapper } from '../DetailsWrapper';

describe('DetailsWrapper', () => {
  test('renders children correctly', () => {
    const { getByText } = render(
      <DetailsWrapper>
        <div>Child 1</div>
        <div>Child 2</div>
      </DetailsWrapper>
    );

    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });
});
