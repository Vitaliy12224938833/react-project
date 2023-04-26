import React from 'react';
import { render } from '@testing-library/react';
import { VideoPlayer } from '../VideoPlayer';

describe('VideoPlayer', () => {
  it('renders correctly', () => {
    const data = { key: 'abc123' };
    const autoplay = 1;

    const { container } = render(
      <VideoPlayer data={data} autoplay={autoplay} />
    );

    expect(container.firstChild).toHaveStyle(`
      position: relative;
      width: 100%;
      height: 0;
      background: black;
      padding-bottom: 56.25%;
    `);

    expect(container.querySelector('.react-player')).toHaveStyle(`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    `);

    expect(container.querySelector('.react-player')).toBeInTheDocument();
  });
});
