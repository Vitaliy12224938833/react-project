import React from 'react';
import { render } from '@testing-library/react';
import { DataContext } from '../../../../Context/Context';
import { ReleaseAndRating } from '../ReleaseAndRating';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useResolvedPath: jest.fn(() => ({ pathname: '/movie/popular' })),
}));

const mockContext = {
  name: 'Mock Name',
  id: '123',
  poster_path: '/mock_poster_path.jpg',
  profile_path: '/mock_profile_path.jpg',
  title: 'Mock Title',
  vote_average: 8,
  release_date: '2000-05-22',
  first_air_date: '2000-05-22',
};

const mockContextEmpty = {};

describe('ReleaseAndRating', () => {
  test('should render without crashing when data is available', () => {
    render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContext]}>
          <ReleaseAndRating />
        </DataContext.Provider>
      </MemoryRouter>
    );
  });

  test('should not render when data is not available', () => {
    const { queryByTestId } = render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContextEmpty]}>
          <ReleaseAndRating />
        </DataContext.Provider>
      </MemoryRouter>
    );
    expect(queryByTestId('release-and-rating')).toBeNull();
  });

  test('should render release date', () => {
    const { getByText } = render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContext]}>
          <ReleaseAndRating />
        </DataContext.Provider>
      </MemoryRouter>
    );
    expect(getByText('2000')).toBeInTheDocument();
  });

  test('should render rating', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContext]}>
          <ReleaseAndRating />
        </DataContext.Provider>
      </MemoryRouter>
    );
    expect(getByTestId('half-rating-read')).toHaveAttribute(
      'aria-label',
      `${mockContext.vote_average / 2} Stars`
    );
  });
});
