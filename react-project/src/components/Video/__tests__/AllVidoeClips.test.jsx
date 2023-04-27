import React from 'react';
import { render } from '@testing-library/react';
import AllVidoeClips from '../AllVidoeClips';

describe('AllVidoeClips', () => {
  const data = [{ key: 'video1' }, { key: 'video2' }, { key: 'video3' }];

  test('renders without crashing', () => {
    render(<AllVidoeClips data={data} />);
  });

  test('displays the title "Clips"', () => {
    const { getByText } = render(<AllVidoeClips data={data} />);
    expect(getByText('Clips')).toBeInTheDocument();
  });

  test('renders the Slider component with the correct props', () => {
    const { getByTestId } = render(<AllVidoeClips data={data} />);
    const slider = getByTestId('slider');
    expect(slider).toBeInTheDocument();
  });

  test('render the video player component', () => {
    const { getByTestId } = render(<AllVidoeClips data={data} />);
    const videoPlayer = getByTestId('video-player');
    expect(videoPlayer).toBeInTheDocument();
  });
});
