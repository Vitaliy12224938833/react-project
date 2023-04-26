import { styled, Paper, Typography } from '@mui/material';
import React from 'react';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));

const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));
export const DescriptionOverview = React.memo(({ overview }) => (
  <StyledPaper data-testid='description-overview-paper' variant='elevation'>
    <StyledText>{overview}</StyledText>
  </StyledPaper>
));
