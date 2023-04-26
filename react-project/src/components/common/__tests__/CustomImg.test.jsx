import React from 'react';
import { render, screen } from '@testing-library/react';
import axiosMock from 'axios';
import { CustomImg } from '../CustomImg';

jest.mock('axios');
const mockResponse = {
  data: {},
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
};

describe('CustomImg', () => {
  test('renders without errors', () => {
    axiosMock.get.mockResolvedValue(mockResponse);
    render(
      <CustomImg src='https://example.com/image.jpg' alt='Example Image' />
    );
    expect(screen.getByTestId('custom-img')).toBeInTheDocument();
  });

  test('renders with correct props', () => {
    const props = {
      src: 'https://example.com/image.jpg',
      alt: 'Example Image',
      width: '100px',
      height: '100px',
      maxWidth: '500px',
      radiusX: '3%',
      radiusY: '4.5%',
    };

    render(<CustomImg {...props} />);
    const imgElement = screen.getByTestId('custom-img');
    expect(imgElement).toHaveAttribute('src', props.src);
    expect(imgElement).toHaveAttribute('alt', props.alt);
    expect(imgElement).toHaveStyle(`width: ${props.width}`);
    expect(imgElement).toHaveStyle(`height: ${props.height}`);
    expect(imgElement).toHaveStyle(`max-width: ${props.maxWidth}`);
    expect(imgElement).toHaveStyle(
      `border-radius: ${props.radiusY} / ${props.radiusX}`
    );
  });
});
