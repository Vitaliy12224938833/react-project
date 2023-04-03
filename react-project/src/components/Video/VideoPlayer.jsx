import React, { useEffect, useRef } from 'react';
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
  '&:hover': {
    '& *': {
      opacity: 1,
    },
  },
  '&:hover $ControlBar': {
    opacity: '1',
    transition: 'opacity 0.3s',
  },
});

export const VideoPlayer = ({ data, autoplay }) => {
  const videoId = data.key;
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.setPlaybackQuality('hd1080');
      playerRef.current.internalPlayer.setVolume(50);
    }
  }, [playerRef]);

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
        onError={(error) => console.log()}
        onStateChange={(event) => console.log()}
        containerClassName='player-container'
        className='react-player'
        ref={playerRef}
      />
    </PlayerWrapper>
  );
};
