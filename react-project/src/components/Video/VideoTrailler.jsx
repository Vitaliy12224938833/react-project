import React from 'react';
import YouTube from 'react-youtube';
import { Box } from '@mui/system';
import { styled } from '@mui/material';

const VideoWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: 'black',
}));

const StyledVideo = styled(YouTube)(({ theme }) => ({
  width: '100%',
  height: '900px',
  [theme.breakpoints.down('lg')]: {
    height: '600px',
  },
  [theme.breakpoints.down('md')]: {
    height: '500px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '250px',
  },
  [theme.breakpoints.down('xs')]: {
    height: '200px',
  },
}));

export const VideoTrailer = ({ data, autoplay }) => {
  if (!data) return null;

  const { key } = data;

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: autoplay === 0 ? 0 : 1,
      fs: 1,
      iv_load_policy: 3,
      loop: 1,
      controls: 1,
      modestbranding: 1,
    },
  };

  return (
    <VideoWrapper>
      <StyledVideo videoId={key} opts={opts} />
    </VideoWrapper>
  );
};
