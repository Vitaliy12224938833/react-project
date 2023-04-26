import React, { useContext } from 'react';
import { Grid, Typography, Rating, Box, styled } from '@mui/material';
import { DataContext } from '../../../Context/Context';
import { transformDate } from '../../../utils/transformDate.mjs';

const ReleaseDate = styled(Typography)(({ theme }) =>
  DataAndRatingStyle(theme)
);

const StyledRating = styled(Rating)(({ theme }) => DataAndRatingStyle(theme));

const DataAndRatingStyle = (theme) => ({
  fontSize: '1rem',
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.8rem',
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '0.9rem',
  },
});

const DateAndRatingWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    bottom: '-1rem',
  },
  [theme.breakpoints.up('sm')]: {
    bottom: '-1.1rem',
  },
  [theme.breakpoints.up('md')]: {
    bottom: '-1.2rem',
  },

  [theme.breakpoints.up('lg')]: {
    bottom: '-1.5rem',
  },
}));

const GridContainer = ({ children }) => {
  return (
    <Grid
      data-testid='release-and-rating'
      container
      justifyContent='space-between'
      alignItems='center'
    >
      {children}
    </Grid>
  );
};

export const ReleaseAndRating = () => {
  const [{ vote_average, release_date, first_air_date }] =
    useContext(DataContext);

  if (!vote_average && !release_date && !first_air_date) {
    return null;
  }

  return (
    <GridContainer>
      <DateAndRatingWrapper>
        <Grid item>
          <ReleaseDate data-testid='release-date'>
            {transformDate(release_date || first_air_date).slice(-4)}
          </ReleaseDate>
        </Grid>
        <Grid item>
          <StyledRating
            data-testid='half-rating-read'
            name='half-rating-read'
            value={vote_average / 2}
            precision={0.5}
            readOnly
          />
        </Grid>
      </DateAndRatingWrapper>
    </GridContainer>
  );
};
