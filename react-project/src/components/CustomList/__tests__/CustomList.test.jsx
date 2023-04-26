import React from 'react';
import { render } from '@testing-library/react';
import { CustomList } from '../CustomList';
import { MemoryRouter } from 'react-router-dom';
import { transformDate } from '../../../utils/transformDate.mjs';
const mediaType = 'movie';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useResolvedPath: jest.fn(() => ({ pathname: `/${mediaType}/popular` })),
}));
describe('CustomList', () => {
  const data = [
    {
      id: '1',
      poster_path: '/mock_poster_path1.jpg',
      profile_path: '/mock_profile_path1.jpg',
      title: 'Mock Title1',
      vote_average: 9,
      release_date: '2000-05-22',
      first_air_date: '2000-05-22',
    },
    {
      id: '2',
      poster_path: '/mock_poster_path2.jpg',
      title: 'Mock Title2',
      vote_average: 5,
      release_date: '2001-05-22',
      first_air_date: '2001-05-22',
    },
    {
      id: '3',
      poster_path: '/mock_poster_path3.jpg',
      title: 'Mock Title3',
      vote_average: 6,
      release_date: '2002-05-22',
      first_air_date: '2002-05-22',
    },
  ];

  test('renders all items in the list', () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <CustomList data={data} />
      </MemoryRouter>
    );
    const listItems = getAllByTestId('list-item');

    expect(listItems).toHaveLength(data.length);
  });

  test('renders items with correct data', () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <CustomList data={data} />
      </MemoryRouter>
    );

    const releaseDates = getAllByTestId('release-date');
    const images = getAllByTestId('custom-img');
    const linkItems = getAllByTestId('link-item');
    const ratings = getAllByTestId('half-rating-read');

    data.forEach((item, idx) => {
      expect(ratings[idx]).toHaveAttribute(
        'aria-label',
        `${item.vote_average / 2} Stars`
      );
      expect(linkItems[idx]).toHaveAttribute(
        'href',
        `/${mediaType}/${item.title}/${item.id}`
      );
      expect(releaseDates[idx]).toHaveTextContent(
        transformDate(item.release_date).slice(-4)
      );
      expect(images[idx]).toHaveAttribute(
        'src',
        `https://image.tmdb.org/t/p/w300${item.poster_path}`
      );
    });
  });
});
