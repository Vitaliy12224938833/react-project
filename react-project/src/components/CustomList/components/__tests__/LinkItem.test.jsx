import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LinkItem } from '../LinkItem';
import { DataContext } from '../../../../Context/Context';

const mediaType = 'movie';
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useResolvedPath: jest.fn(() => ({ pathname: `/${mediaType}/popular` })),
}));

describe('LinkItem', () => {
  const mockContext = {
    name: 'Mock Name',
    id: '123',
    poster_path: '/mock_poster_path.jpg',
    profile_path: '/mock_profile_path.jpg',
    title: 'Mock Title',
  };

  test('renders without errors', () => {
    render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContext]}>
          <LinkItem />
        </DataContext.Provider>
      </MemoryRouter>
    );
  });

  test('renders a link to the correct path', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContext]}>
          <LinkItem />
        </DataContext.Provider>
      </MemoryRouter>
    );

    const link = getByRole('link');
    expect(link).toHaveAttribute(
      'href',
      `/${mediaType}/${mockContext.name}/${mockContext.id}`
    );
  });

  test('renders an image with the correct source and alt text', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <DataContext.Provider value={[mockContext]}>
          <LinkItem />
        </DataContext.Provider>
      </MemoryRouter>
    );

    const img = getByAltText(mockContext.name);
    expect(img).toHaveAttribute(
      'src',
      `https://image.tmdb.org/t/p/w300${
        mockContext.poster_path || mockContext.profile_path
      }`
    );
  });
});
