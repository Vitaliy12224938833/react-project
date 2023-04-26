// Import the component and the hook
import React from 'react';
import { render } from '@testing-library/react';
import Reviews from '../Reviews';

let mockData = {
  results: [
    {
      id: 1,
      author_details: {
        avatar_path: '/avatar1.png',
        username: 'JohnDoe',
        rating: 7.4,
      },
      content: 'This is a review1.',
      updated_at: '2022-04-01T12:00:00.000Z',
    },
    {
      id: 2,
      author_details: {
        avatar_path: '/avatar2.png',
        username: 'DoeJohn',
        rating: 8,
      },
      content: 'This is a review2.',
      updated_at: '2020-04-01T12:00:00.000Z',
    },
  ],
};
let mockIsLoading = true;
jest.mock('../../../HOOKs/useFetchData', () => ({
  useFetchData: jest.fn(() => [mockData, mockIsLoading, jest.fn(), jest.fn()]),
}));
describe('Reviews component with correct mockData', () => {
  beforeEach(() => {});

  test('renders the reviews correctly', () => {
    const { getByText } = render(<Reviews id={1} mediaType='movie' />);
    expect(getByText('This is a review1.')).toBeInTheDocument();
    expect(getByText('This is a review2.')).toBeInTheDocument();
  });

  test('should render the author username', () => {
    const { getByText } = render(<Reviews data={mockData} />);
    expect(getByText('JohnDoe')).toBeInTheDocument();
    expect(getByText('DoeJohn')).toBeInTheDocument();
  });

  test('should render the review date', () => {
    const { getByText } = render(<Reviews data={mockData} />);
    expect(getByText('01 04 2022')).toBeInTheDocument();
    expect(getByText('01 04 2020')).toBeInTheDocument();
  });

  test('should render the author avatar', () => {
    const { container } = render(<Reviews data={mockData} />);
    const avatars = container.getElementsByClassName('MuiAvatar-img');

    for (let i = 0; i < avatars.length; i++) {
      const avatar = avatars[i];
      expect(avatar).toHaveAttribute(
        'src',
        `https://image.tmdb.org/t/p/w185/avatar${i + 1}.png`
      );
    }
  });

  test('should render the rating', () => {
    const { container } = render(<Reviews data={mockData} />);
    const ratings = container.getElementsByClassName('MuiRating-root');

    for (let i = 0; i < ratings.length; i++) {
      const mockRating = mockData.results[i].author_details.rating;
      const rating = ratings[i];
      expect(rating).toHaveAttribute(
        'aria-label',
        `${Math.round(mockRating)} Stars`
      );
    }
  });

  test('renders Loader component while data is being fetched', () => {
    mockData = null;
    mockIsLoading = false;
    const { getByTestId } = render(<Reviews id={1} mediaType='movie' />);
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  test('does not render Reviews component if no results are found', () => {
    mockData = { results: [] };
    const { queryAllByTestId, queryByText } = render(
      <Reviews id={1} mediaType='movie' />
    );

    expect(queryByText('Reviews')).not.toBeInTheDocument();
    expect(queryAllByTestId('review')).toHaveLength(0);
  });
});
