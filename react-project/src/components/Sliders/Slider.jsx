import { useState } from 'react';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import 'react-multi-carousel/lib/styles.css';

export const Slider = ({ data, children }) => {
  if (!data.length) return;

  const [currIdx, setCurrIdx] = useState(0);

  const switchBtnSx = (side) => ({
    position: 'absolute',
    zIndex: 666,
    height: 300,
    [side]: -20,
    bottom: '39%',
    opacity: 0,
    borderRadius: 5,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0,  0.3)',
    },
  });

  const dotsSx = {
    textAlign: 'center',
    opacity: 0,
  };

  const conteinerSx = {
    position: 'relative',
    '&:hover': {
      '& .MuiIconButton-root, .css-1ddpyth ': {
        opacity: 1,
        transition: 'all .3s',
      },
    },
  };

  const prevSlide = () => {
    currIdx >= 1 ? setCurrIdx(currIdx - 1) : setCurrIdx(data.length - 1);
  };

  const nextSlide = () => {
    currIdx < data.length - 1 ? setCurrIdx(currIdx + 1) : setCurrIdx(0);
  };

  const goToSlide = (idx) => setCurrIdx(idx);

  const LeftButton = () => (
    <IconButton sx={switchBtnSx('left')} onClick={prevSlide}>
      <ArrowBackIosNewIcon color={'primary'} sx={{ fontSize: 150 }} />
    </IconButton>
  );
  const RigthButton = () => (
    <IconButton sx={switchBtnSx('right')} onClick={nextSlide}>
      <ArrowForwardIosIcon color={'primary'} sx={{ fontSize: 150 }} />
    </IconButton>
  );

  return (
    <Box sx={conteinerSx}>
      <LeftButton />
      <RigthButton />
      {children(data[currIdx])}
      <Box sx={dotsSx}>
        {data.map((item, idx) => (
          <IconButton key={idx} onClick={() => goToSlide(idx)}>
            {currIdx === idx ? (
              <RadioButtonCheckedIcon fontSize='small' />
            ) : (
              <RadioButtonUncheckedIcon fontSize='small' />
            )}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};
