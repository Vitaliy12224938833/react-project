import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material';
import { ListItem } from './components/ListItem';
import { DataContext } from '../../Context/Context';

const GridStyled = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  [theme.breakpoints.up('xs')]: {
    gap: 25,
  },
  [theme.breakpoints.up('sm')]: {
    gap: 30,
  },
  [theme.breakpoints.up('md')]: {
    gap: 35,
  },
  [theme.breakpoints.up('lg')]: {
    gap: 45,
  },
}));

export const CustomList = React.memo(({ data }) => {
  return (
    <GridStyled container>
      {data.map((item, idx) => (
        <DataContext.Provider key={idx} value={[item, idx]}>
          <ListItem />
        </DataContext.Provider>
      ))}
    </GridStyled>
  );
});
