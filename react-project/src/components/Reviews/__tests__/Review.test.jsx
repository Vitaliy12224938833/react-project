import React from 'react';
import { render } from '@testing-library/react';
import { Review } from '../Review';

const mockData = {
  author_details: {
    avatar_path: '/avatar.png',
    username: 'JohnDoe',
    rating: 7.4,
  },
  content: 'This is a review.',
  updated_at: '2022-04-01T12:00:00.000Z',
};

const mockDataEmpty = {};

describe('Review', () => {
  test('should render the author avatar', () => {
    const { container } = render(<Review data={mockData} />);
    const avatar = container.getElementsByClassName('MuiAvatar-img')[0];
    expect(avatar).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/w185/avatar.png'
    );
  });

  test('should render the author username', () => {
    const { getByText } = render(<Review data={mockData} />);
    const username = getByText('JohnDoe');
    expect(username).toBeInTheDocument();
  });

  test('should not render the author username', () => {
    const { queryByText } = render(<Review data={mockDataEmpty} />);
    const username = queryByText('JohnDoe');
    expect(username).toBeNull();
  });

  test('should render the review content', () => {
    const { getByText } = render(<Review data={mockData} />);
    const content = getByText('This is a review.');
    expect(content).toBeInTheDocument();
  });

  test('should not render the review content', () => {
    const { queryByText } = render(<Review data={mockDataEmpty} />);
    const content = queryByText('This is a review.');
    expect(content).toBeNull();
  });

  test('should render the review date', () => {
    const { getByText } = render(<Review data={mockData} />);
    const date = getByText('01 04 2022');
    expect(date).toBeInTheDocument();
  });

  test('should not render the review date', () => {
    const { queryByText } = render(<Review data={mockDataEmpty} />);
    const date = queryByText('01 04 2022');
    expect(date).toBeNull();
  });

  test('should render the rating', () => {
    const { container } = render(<Review data={mockData} />);
    const mockRating = mockData.author_details.rating;
    const rating = container.getElementsByClassName('MuiRating-root')[0];
    expect(rating).toHaveAttribute(
      'aria-label',
      `${Math.round(mockRating)} Stars`
    );
  });
});
