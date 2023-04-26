import React from 'react';
import { render } from '@testing-library/react';
import { PersonDescription } from '../PersonDescription';

const mockData = {
  birthday: '2000-05-22',
  deathday: '2075-05-22',
  place_of_birth: 'some place',
  homepage: 'http//:test-url.com',
  profile_path: '/profile_path.png',
  name: 'Some Name',
};

const mockDataEmpty = {};

describe('PersonDescription', () => {
  test('should render the name', () => {
    const { getByText } = render(<PersonDescription data={mockData} />);
    const name = getByText('Some Name');
    expect(name).toBeInTheDocument();
  });

  test('should not render the name', () => {
    const { queryByText } = render(<PersonDescription data={mockDataEmpty} />);
    const name = queryByText('Some Name');
    expect(name).toBeNull();
  });

  test('should render the birthday', () => {
    const { getByText } = render(<PersonDescription data={mockData} />);
    const birthday = getByText('Deathday:');
    const birthdayValue = getByText('22 05 2000');
    expect(birthday).toBeInTheDocument();
    expect(birthdayValue).toBeInTheDocument();
  });

  test('should not render the birthday', () => {
    const { queryByText } = render(<PersonDescription data={mockDataEmpty} />);
    const birthday = queryByText('Birthday:');
    const birthdayValue = queryByText('22 05 2000');
    expect(birthday).toBeNull();
    expect(birthdayValue).toBeNull();
  });

  test('should render the place of birth', () => {
    const { getByText } = render(<PersonDescription data={mockData} />);
    const placeOfBirth = getByText('Place of birth:');
    const placeOfBirthValue = getByText('some place');
    expect(placeOfBirth).toBeInTheDocument();
    expect(placeOfBirthValue).toBeInTheDocument();
  });

  test('should not render the place of birth', () => {
    const { queryByText } = render(<PersonDescription data={mockDataEmpty} />);
    const placeOfBirth = queryByText('Place of birth:');
    const placeOfBirthValue = queryByText('some place');
    expect(placeOfBirth).toBeNull();
    expect(placeOfBirthValue).toBeNull();
  });

  test('should render the deathday', () => {
    const { getByText } = render(<PersonDescription data={mockData} />);
    const deathday = getByText('Deathday:');
    const deathdayValue = getByText('22 05 2075');
    expect(deathday).toBeInTheDocument();
    expect(deathdayValue).toBeInTheDocument();
  });

  test('should not render the deathday', () => {
    const { queryByText } = render(<PersonDescription data={mockDataEmpty} />);
    const deathday = queryByText('Deathday:');
    const deathdayValue = queryByText('22 05 2075');
    expect(deathday).toBeNull();
    expect(deathdayValue).toBeNull();
  });

  test('should render the homepage with write url', () => {
    const { getByText } = render(<PersonDescription data={mockData} />);
    const homepage = getByText('Homepage:');
    const homepageValue = getByText('http//:test-url.com');
    expect(homepage).toBeInTheDocument();
    expect(homepageValue).toBeInTheDocument();
    expect(homepageValue).toHaveAttribute('href', 'http//:test-url.com');
  });

  test('should not render the homepage with url', () => {
    const { queryByText } = render(<PersonDescription data={mockDataEmpty} />);
    const homepage = queryByText('Homepage:');
    const homepageValue = queryByText('http//:test-url.com');
    expect(homepage).toBeNull();
    expect(homepageValue).toBeNull();
  });

  test('should render the profile path', () => {
    const { getByTestId } = render(<PersonDescription data={mockData} />);
    const profilePath = getByTestId('custom-img');
    expect(profilePath).toBeInTheDocument();
    expect(profilePath).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/w500/profile_path.png'
    );
  });

  test('should not render the profile path', () => {
    const { queryByTestId } = render(
      <PersonDescription data={mockDataEmpty} />
    );
    const profilePath = queryByTestId('custom-img');
    expect(profilePath).toBeNull();
  });
});
