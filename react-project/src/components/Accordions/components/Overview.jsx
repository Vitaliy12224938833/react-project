import React, { useContext } from 'react';
import { Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../../../Context/Context';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2),
  width: '100%',
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
  },
}));
export const Overview = () => {
  const { overview } = useContext(DataContext);
  if (!overview) return null;
  return (
    <StyledPaper>
      <StyledText>{overview}</StyledText>
    </StyledPaper>
  );
};
