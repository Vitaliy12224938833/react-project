import { styled, Paper, Typography } from '@mui/material';

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
export const DescriptionOverview = ({ overview }) => (
  <StyledPaper variant='elevation'>
    <StyledText>{overview}</StyledText>
  </StyledPaper>
);
