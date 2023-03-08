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

  const prevSlide = () => {
    currIdx >= 1 ? setCurrIdx(currIdx - 1) : setCurrIdx(data.length - 1);
  };

  const nextSlide = () => {
    currIdx < data.length - 1 ? setCurrIdx(currIdx + 1) : setCurrIdx(0);
  };

  const goToSlide = (idx) => setCurrIdx(idx);

  const LeftButton = () => (
    <IconButton
      sx={{
        position: 'absolute',
        zIndex: 666,
        height: 300,
        left: 0,
        bottom: '39%',
      }}
      onClick={prevSlide}
    >
      <ArrowBackIosNewIcon color={'primary'} sx={{ fontSize: 150 }} />
    </IconButton>
  );
  const RigthButton = () => (
    <IconButton
      sx={{
        position: 'absolute',
        zIndex: 666,
        height: 300,
        right: 0,
        bottom: '39%',
      }}
      onClick={nextSlide}
    >
      <ArrowForwardIosIcon color={'primary'} sx={{ fontSize: 150 }} />
    </IconButton>
  );
  return (
    <Box sx={{ position: 'relative' }}>
      <LeftButton />
      <RigthButton />
      {children(data[currIdx], 'slideStyles')}
      <Box sx={{ textAlign: 'center' }}>
        {data.map((item, idx) => (
          <IconButton onClick={() => goToSlide(idx)}>
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
