import React from 'react';
import YouTube from 'react-youtube';
import { styled } from '@mui/material';

const PlayerWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  height: '0',
  background: 'black',
  paddingBottom: '56.25%',
  '& .react-player': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
  },
});

export const VideoPlayer = React.memo(({ data, autoplay }) => {
  if (data) {
    const videoId = data.key;

    const options = {
      width: '100%',
      height: '100%',
      playerVars: {
        controls: 1,
        autoplay: autoplay || 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        fs: 1,
        iv_load_policy: 3,
        loop: 1,
      },
    };

    return (
      <PlayerWrapper>
        <YouTube
          videoId={videoId}
          opts={options}
          containerClassName='player-container'
          className='react-player'
        />
      </PlayerWrapper>
    );
  }
});
