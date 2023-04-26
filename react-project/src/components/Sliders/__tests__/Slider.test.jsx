import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Slider } from '../Slider';

describe('Slider component', () => {
  const mockData = [
    { id: 1, name: 'Slide 1', imgSrc: 'slide1.jpg' },
    { id: 2, name: 'Slide 2', imgSrc: 'slide2.jpg' },
    { id: 3, name: 'Slide 3', imgSrc: 'slide3.jpg' },
  ];

  test('displays the first slide by default', () => {
    const { getByText } = render(
      <Slider data={mockData}>{(slide) => <h1>{slide.name}</h1>}</Slider>
    );
    expect(getByText('Slide 1')).toBeInTheDocument();
  });

  test('displays the correct slide when the next button is clicked', () => {
    const { getByText, getByTestId } = render(
      <Slider data={mockData}>{(slide) => <h1>{slide.name}</h1>}</Slider>
    );
    fireEvent.click(getByTestId('next-slide'));
    expect(getByText('Slide 2')).toBeInTheDocument();
  });

  test('displays the correct slide when the previous button is clicked', () => {
    const { getByText, getByTestId } = render(
      <Slider data={mockData}>{(slide) => <h1>{slide.name}</h1>}</Slider>
    );
    fireEvent.click(getByTestId('next-slide'));
    fireEvent.click(getByTestId('prev-slide'));
    expect(getByText('Slide 1')).toBeInTheDocument();
  });

  test('displays the correct slide when a dot is clicked', () => {
    const { getByText, getByTestId } = render(
      <Slider data={mockData}>{(slide) => <h1>{slide.name}</h1>}</Slider>
    );
    fireEvent.click(getByTestId('got-to-2-slide'));
    expect(getByText('Slide 2')).toBeInTheDocument();
  });
});
