import React from 'react';
import { render } from '@testing-library/react';
import Description from '../Description';

const mockData = {
  title: 'Mock Movie',
  runtime: 120,
  production_countries: [{ name: 'USA' }, { name: 'UA' }],
  release_date: '2022-01-01',
  status: 'Released',
  vote_average: 7.5,
  budget: 50000000,
  revenue: 100000000,
  genres: [{ name: 'Action' }, { name: 'Drama' }],
  poster_path: '/mockposterpath.jpg',
  overview: 'This is a mock movie about action and drama.',
};

const mockDataEmpty = {};

describe('Description component', () => {
  test('should render the title', () => {
    const { getByText } = render(<Description data={mockData} />);
    const title = getByText('Mock Movie');
    expect(title).toBeInTheDocument();
  });

  test('should not render the title', () => {
    const { queryByText } = render(<Description data={mockDataEmpty} />);
    const title = queryByText('Mock Movie');
    expect(title).toBeNull();
  });

  test('should render the poster image', () => {
    const { getByAltText } = render(<Description data={mockData} />);
    const poster = getByAltText('Mock Movie');
    expect(poster).toBeInTheDocument();
    expect(poster).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/original/mockposterpath.jpg'
    );
  });

  test('should not render the poster image', () => {
    const { queryByAltText } = render(<Description data={mockDataEmpty} />);
    const poster = queryByAltText('Mock Movie');
    expect(poster).toBeNull();
  });

  test('should render the runtime', () => {
    const { getByText } = render(<Description data={mockData} />);
    const runtime = getByText('Runetime:');
    const runtimeValue = getByText('2h');
    expect(runtime).toBeInTheDocument();
    expect(runtimeValue).toBeInTheDocument();
  });

  test('should not render the runtime', () => {
    const { queryByText } = render(<Description data={mockDataEmpty} />);
    const runtime = queryByText('Runetime:');
    const runtimeValue = queryByText('2h');
    expect(runtime).toBeNull();
    expect(runtimeValue).toBeNull();
  });

  test('should render the production countries', () => {
    const { getByText } = render(<Description data={mockData} />);
    const countries = getByText('Contry:');
    const countriesValue = getByText('USA, UA');
    expect(countries).toBeInTheDocument();
    expect(countriesValue).toBeInTheDocument();
  });
  test('should not render the production countries', () => {
    const { queryByText } = render(<Description data={mockDataEmpty} />);
    const countries = queryByText('Contry:');
    const countriesValue = queryByText('USA, UA');
    expect(countries).toBeNull();
    expect(countriesValue).toBeNull();
  });

  test('should render the release date', () => {
    const { getByText } = render(<Description data={mockData} />);
    const releaseDate = getByText('Relis:');
    const releaseDateValue = getByText('01 01 2022');
    expect(releaseDate).toBeInTheDocument();
    expect(releaseDateValue).toBeInTheDocument();
  });

  test('should not render the release date', () => {
    const { queryByText } = render(<Description data={mockDataEmpty} />);
    const releaseDate = queryByText('Relis:');
    const releaseDateValue = queryByText('01 01 2022');
    expect(releaseDate).toBeNull();
    expect(releaseDateValue).toBeNull();
  });

  test('should render the status', () => {
    const { getByText } = render(<Description data={mockData} />);
    const status = getByText('Status:');
    const statusValue = getByText('Released');
    expect(status).toBeInTheDocument();
    expect(statusValue).toBeInTheDocument();
  });

  test('should not render the status', () => {
    const { queryByText } = render(<Description data={mockDataEmpty} />);
    const status = queryByText('Status:');
    const statusValue = queryByText('Released');
    expect(status).toBeNull();
    expect(statusValue).toBeNull();
  });
  test('should render the rating', () => {
    const { getByText } = render(<Description data={mockData} />);
    const rating = getByText('Rating:');
    const ratingValue = getByText('7.5');
    expect(rating).toBeInTheDocument();
    expect(ratingValue).toBeInTheDocument();
  });

  test('should not render the rating', () => {
    const { queryByText } = render(<Description data={mockDataEmpty} />);
    const rating = queryByText('Rating:');
    const ratingValue = queryByText('7.5');
    expect(rating).toBeNull();
    expect(ratingValue).toBeNull();
  });

  test('should render the budget', () => {
    const { getByText } = render(<Description data={mockData} />);
    const budget = getByText('Budget:');
    const budgetValue = getByText('50 000 000.00 $');
    expect(budget).toBeInTheDocument();
    expect(budgetValue).toBeInTheDocument();
  });
  test('should not render the budget', () => {
    const { queryByText } = render(<Description data={mockDataEmpty} />);
    const budget = queryByText('Budget:');
    const budgetValue = queryByText('50 000 000.00 $');
    expect(budget).toBeNull();
    expect(budgetValue).toBeNull();
  });

  test('should render the revenue', () => {
    const { getByText } = render(<Description data={mockData} />);
    const revenue = getByText('Revenue:');
    const revenueValue = getByText('100 000 000.00 $');
    expect(revenue).toBeInTheDocument();
    expect(revenueValue).toBeInTheDocument();
  });

  test('should not render the revenue', () => {
    const { queryByText } = render(<Description data={mockDataEmpty} />);
    const revenue = queryByText('Revenue:');
    const revenueValue = queryByText('100 000 000.00 $');
    expect(revenue).toBeNull();
    expect(revenueValue).toBeNull();
  });

  test('should render the genres', () => {
    const { getByText } = render(<Description data={mockData} />);
    const genres = getByText('Genres:');
    const genresValue = getByText('Action, Drama');
    expect(genres).toBeInTheDocument();
    expect(genresValue).toBeInTheDocument();
  });

  test('should not render the genres', () => {
    const { queryByText } = render(<Description data={mockDataEmpty} />);
    const genres = queryByText('Genres:');
    const genresValue = queryByText('Action, Drama');
    expect(genres).toBeNull();
    expect(genresValue).toBeNull();
  });
});
