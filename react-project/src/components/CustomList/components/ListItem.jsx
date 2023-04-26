import React from 'react';
import { Grid, styled } from '@mui/material';
import { LinkItem } from './LinkItem';
import { ReleaseAndRating } from './ReleaseAndRating';

const GridItemStyled = styled(Grid)(({ theme }) => ({
  position: 'relative',
  borderRadius: '3%',
  transition: 'all 0.2s',
  maxWidth: 200,
  minWidth: 110,
  '&:hover': {
    boxShadow: 10,
  },
}));

export const ListItem = React.memo(() => (
  <GridItemStyled data-testid='list-item' item xs={5} sm={3} md={2}>
    <LinkItem />
    <ReleaseAndRating />
  </GridItemStyled>
));
