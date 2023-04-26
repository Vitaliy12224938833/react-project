import React from 'react';
import { render, screen } from '@testing-library/react';
import { EpisodesAccordions } from '../EpisodesAccordions';

describe('EpisodesAccordions', () => {
  const mockData = [
    {
      id: 1,
      name: 'Episode 1',
      air_date: '2022-03-01',
      vote_average: 7.5,
      still_path: '/still_path_1.jpg',
      overview: 'This is the first episode',
    },
    {
      id: 2,
      name: 'Episode 2',
      air_date: '2022-03-08',
      vote_average: 8.2,
      still_path: '/still_path_2.jpg',
      overview: 'This is the second episode',
    },
  ];
  test('renders the correct number of items', () => {
    render(<EpisodesAccordions list={mockData} />);
    const items = screen.getAllByRole('button', { expanded: false });
    expect(items).toHaveLength(mockData.length * 2);
  });

  test('displays the name of the first episode', () => {
    render(<EpisodesAccordions list={mockData} />);
    const firstEpisodeName = screen.getByText('1. Episode 1');
    expect(firstEpisodeName).toBeInTheDocument();
  });
  test('renders summary correctly', () => {
    const { getByText } = render(<EpisodesAccordions list={mockData} />);
    expect(getByText('1. Episode 1')).toBeInTheDocument();
    expect(getByText('2. Episode 2')).toBeInTheDocument();
    expect(getByText('01 03 2022')).toBeInTheDocument();
    expect(getByText('08 03 2022')).toBeInTheDocument();
  });

  test('renders details correctly', () => {
    const { getByText } = render(<EpisodesAccordions list={mockData} />);
    expect(getByText('This is the first episode')).toBeInTheDocument();
    expect(getByText('This is the second episode')).toBeInTheDocument();
  });
  test('render image corecctly', () => {
    const { getAllByTestId } = render(<EpisodesAccordions list={mockData} />);
    const images = getAllByTestId('custom-img');
    images.forEach((img, id) =>
      expect(img).toHaveAttribute(
        'src',
        `https://image.tmdb.org/t/p/original/still_path_${id + 1}.jpg`
      )
    );
  });
});
