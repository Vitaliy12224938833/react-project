import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Trailer from '../Trailer';
import { getByTitle } from '@testing-library/dom';
const mockList = [
  {
    type: 'Trailer',
    official: true,
    key: 'eqCYw_o5lng',
  },
  {
    type: 'Clip',
    official: true,
    key: 'abc123',
  },
];

describe('Trailer', () => {
  test('does not render a video player if no Trailer is found in the list', () => {
    const { container } = render(
      <Trailer list={mockList.filter((item) => item.type !== 'Trailer')} />
    );
    const player = container.querySelector('.react-player');
    expect(player).not.toBeInTheDocument();
  });

  test('does not render a video player if no official Trailer is found in the list', () => {
    const { container } = render(
      <Trailer
        list={mockList.filter(
          (item) => item.type === 'Trailer' && !item.official
        )}
      />
    );
    const player = container.querySelector('.react-player');
    expect(player).not.toBeInTheDocument();
  });
});
