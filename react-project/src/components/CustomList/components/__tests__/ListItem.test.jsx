import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DataContext } from '../../../../Context/Context';
import { ListItem } from '../ListItem';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useResolvedPath: jest.fn(() => ({ pathname: '/movie/popular' })),
}));

describe('ListItem', () => {
  const mockContext = {
    name: 'Mock Name',
    id: '123',
    poster_path: '/mock_poster_path.jpg',
    profile_path: '/mock_profile_path.jpg',
    title: 'Mock Title',
    vote_average: 7.5,
    release_date: '2000-05-22',
    first_air_date: '2000-05-22',
  };

  const mockContextEmpty = {};

  test('should render without crashing', () => {
    render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContext]}>
          <ListItem />
        </DataContext.Provider>
      </MemoryRouter>
    );
  });

  test('should render a lsit item', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContext]}>
          <ListItem />
        </DataContext.Provider>
      </MemoryRouter>
    );
    const gridItem = getByTestId('list-item');
    expect(gridItem).toBeInTheDocument();
  });

  test('should render a LinkItem', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContext]}>
          <ListItem />
        </DataContext.Provider>
      </MemoryRouter>
    );
    const linkItem = getByTestId('link-item');
    expect(linkItem).toBeInTheDocument();
  });

  test('should render a ReleaseAndRating component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContext]}>
          <ListItem />
        </DataContext.Provider>
      </MemoryRouter>
    );
    const releaseAndRating = getByTestId('release-and-rating');
    expect(releaseAndRating).toBeInTheDocument();
  });

  test('should not render ReleaseAndRating component when context is empty', () => {
    const { queryByTestId } = render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContextEmpty]}>
          <ListItem />
        </DataContext.Provider>
      </MemoryRouter>
    );
    const releaseAndRating = queryByTestId('release-and-rating');
    expect(releaseAndRating).not.toBeInTheDocument();
  });

  test('should not render PosterImage component when poster_path is undefined', () => {
    const mockContextWithoutPosterPath = {
      ...mockContext,
      poster_path: undefined,
    };
    const { queryByTestId } = render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContextWithoutPosterPath]}>
          <ListItem />
        </DataContext.Provider>
      </MemoryRouter>
    );
    const posterImage = queryByTestId('poster-image');
    expect(posterImage).not.toBeInTheDocument();
  });
});
