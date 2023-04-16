import { useState } from 'react';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';

const StyledArrowIcon = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  zIndex: 666,
  opacity: 0,
  borderRadius: 3,
  padding: '10% 0',
  top: '45%',
  transform: 'translateY(-50%)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  [theme.breakpoints.down('sm')]: {
    top: '30%',
  },
}));

const StyledLeftBtn = styled(StyledArrowIcon)({
  left: '-3%',
});

const StyledRightBtn = styled(StyledArrowIcon)({
  right: '-3%',
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

const IconStyle = (theme) => ({
  fontSize: '10rem',
  [theme.breakpoints.down('lg')]: {
    fontSize: '8rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '6rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '2rem',
  },
});

const StyledLeftIcon = styled(ArrowBackIosNewIcon)(({ theme }) =>
  IconStyle(theme)
);

const StyledRigthIcon = styled(ArrowForwardIosIcon)(({ theme }) =>
  IconStyle(theme)
);

const StyledRadioIcon = styled(IconButton)(({ theme }) => ({
  padding: '0.5rem',
  [theme.breakpoints.down('md')]: {
    padding: '0.3rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0.1rem',
  },
}));

const StyledRadioBtn = (theme) => ({
  fontSize: '1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.7rem',
    padding: 0,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.4rem',
  },
});

const RadioChecked = styled(RadioButtonCheckedIcon)(({ theme }) =>
  StyledRadioBtn(theme)
);
const RadioUnchecked = styled(RadioButtonUncheckedIcon)(({ theme }) =>
  StyledRadioBtn(theme)
);

export const Slider = React.memo(({ data, children }) => {
  if (!data.length) return;

  const [currIdx, setCurrIdx] = useState(0);

  const prevSlide = () => setCurrIdx((currIdx - 1 + data.length) % data.length);

  const nextSlide = () => setCurrIdx((currIdx + 1) % data.length);

  const goToSlide = (idx) => setCurrIdx(idx);

  const LeftButton = () => (
    <StyledLeftBtn onClick={prevSlide}>
      <StyledLeftIcon color={'primary'} />
    </StyledLeftBtn>
  );

  const RightButton = () => (
    <StyledRightBtn onClick={nextSlide}>
      <StyledRigthIcon color={'primary'} />
    </StyledRightBtn>
  );

  return (
    <Box sx={conteinerSx}>
      <LeftButton />
      <RightButton />

      {children(data[currIdx])}
      <Box sx={dotsSx}>
        {data.map((item, idx) => (
          <StyledRadioIcon key={idx} onClick={() => goToSlide(idx)}>
            {currIdx === idx ? <RadioChecked /> : <RadioUnchecked />}
          </StyledRadioIcon>
        ))}
      </Box>
    </Box>
  );
});
