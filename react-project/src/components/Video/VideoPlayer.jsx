import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { styled, Slider, IconButton } from '@mui/material';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

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

const ControlBar = styled('div')({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#000',
  opacity: '0',
  transition: 'opacity 0.3s',
  zIndex: '10',
});

const PlayPauseButton = styled(IconButton)({
  color: '#fff',
  transition: 'opacity 0.3s',
});

const VolumeButton = styled(IconButton)({
  marginLeft: 'auto',
  color: '#fff',
  transition: 'opacity 0.3s',
});

const VolumeSlider = styled(Slider)({
  marginLeft: '10px',
  width: '15%',
  transition: 'opacity 0.3s',
});

const FullscreenButton = styled(FullscreenIcon)({
  color: '#fff',
  transition: 'opacity 0.3s',
});
const Scrubber = styled(Slider)({
  width: '70%',
  margin: '0 10px',
  color: 'white',
  '& .MuiSlider-rail': {
    color: 'gray',
  },
  '& .MuiSlider-track': {
    color: 'white',
  },
  '& .MuiSlider-thumb': {
    color: 'white',
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

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [player, setPlayer] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(true);

  const handleSeek = (event) => {
    if (isDragging) {
      const newTime = event.target.getCurrentTime();

      setPlayedSeconds(newTime);
    }
  };

  const handlePlayPauseClick = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.internalPlayer.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.internalPlayer.playVideo();
        setIsPlaying(true);
      }
    }
  };

  const handleReady = (event) => {
    if (autoplay) event.target.playVideo();
    setPlayer(event.target);
    setDuration(event.target.getDuration());
  };

  const handleVolumeChange = (e, newValue) => {
    console.log(newValue);
    const newVolume = newValue / 100;
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.internalPlayer.setVolume(newVolume * 100);
      setIsMuted(false);
    }
  };

  const handleVolumeToggle = () => {
    setIsMuted(!isMuted);
    if (playerRef.current) {
      const isCurrentlyMuted = playerRef.current.internalPlayer.isMuted();
      playerRef.current.internalPlayer.mute(!isCurrentlyMuted);
      if (!isCurrentlyMuted) {
        setVolume(0);
      } else {
        setVolume(playerRef.current.internalPlayer.getVolume() / 100);
      }
    }
  };

  const handleScrubberChange = (event, value) => {
    setIsDragging(false);
    setPlayedSeconds(value);

    if (playerRef.current) {
      playerRef.current.internalPlayer.seekTo(value);
    }
  };

  const handleFullScreen = () => {
    if (player !== null) {
      if (!isFullScreen) {
        player.getIframe().requestFullscreen();
      } else {
        document.exitFullscreen();
      }

      setIsFullScreen(!isFullScreen);
    }
  };

  const options = {
    width: '100%',
    height: '100%',
    playerVars: {
      controls: 0,
      autoplay: 0,
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
        onReady={handleReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnd={() => setIsPlaying(false)}
        onError={(error) => console.log()}
        onStateChange={(event) => console.log()}
        onSeek={handleSeek}
        containerClassName='player-container'
        className='react-player'
        ref={playerRef}
      />
      <ControlBar>
        <PlayPauseButton onClick={handlePlayPauseClick}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </PlayPauseButton>

        <Scrubber
          value={playedSeconds || 0}
          max={duration}
          onChange={handleScrubberChange}
          aria-labelledby='continuous-slider'
        />
        <VolumeButton onClick={handleVolumeToggle}>
          {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </VolumeButton>
        <VolumeSlider
          aria-label='Volume'
          min={0}
          max={100}
          step={1}
          value={isMuted ? 0 : volume * 100}
          onChange={handleVolumeChange}
        />
        <IconButton onClick={handleFullScreen}>
          <FullscreenButton />
        </IconButton>
      </ControlBar>
    </PlayerWrapper>
  );
};
