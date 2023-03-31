import React, { useContext } from 'react';
import { Link, useResolvedPath } from 'react-router-dom';
import { Grid, Typography, Box } from '@mui/material';
import { Rating, styled } from '@mui/material';

import { DataContext } from '../../Context/Context';
import { CustomImg } from '../CustomImg/CustomImg';

const Item = ({ item: { poster_path, profile_path } }) => {
  const GridStyled = styled(Grid)(({ theme }) => ({
    position: 'relative',
    borderRadius: '3%',
    transition: 'all 0.2s',
    maxWidth: 200,
    minWidth: 110,
    '&:hover': {
      boxShadow: 10,
    },
  }));

  if (!poster_path && !profile_path) {
    return null;
  }

  return (
    <GridStyled item xs={5} sm={3} md={2}>
      <CustomLink />
      <ReleaseAndRating />
    </GridStyled>
  );
};

const CustomLink = () => {
  const [{ name, id, poster_path, profile_path, title }] =
    useContext(DataContext);
  const { pathname } = useResolvedPath();
  const mediaType = pathname.split('/')[1];
  const LinkStyled = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
  });

  return (
    <LinkStyled to={`/${mediaType}/${name || title}/${id}`}>
      <CustomImg
        src={`https://image.tmdb.org/t/p/w300${poster_path || profile_path}`}
        alt={name}
      />
    </LinkStyled>
  );
};

const transformDate = (date) => date?.slice(0, 4);

const ReleaseAndRating = () => {
  const [{ vote_average, release_date, first_air_date }] =
    useContext(DataContext);
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

  const ReleaseDate = styled(Typography)(({ theme }) =>
    DataAndRatingStyle(theme)
  );
  const StyledRating = styled(Rating)(({ theme }) => DataAndRatingStyle(theme));

  if (!vote_average && !release_date && !first_air_date) {
    return null;
  }

  return (
    <Grid container justifyContent='space-between' alignItems='center'>
      <DateAndRatingWrapper>
        <Grid item>
          <ReleaseDate>
            {transformDate(release_date || first_air_date)}
          </ReleaseDate>
        </Grid>
        <Grid item>
          <StyledRating
            name='half-rating-read'
            value={vote_average / 2}
            precision={0.5}
            readOnly
          />
        </Grid>
      </DateAndRatingWrapper>
    </Grid>
  );
};

const MemoItem = React.memo(Item);

export const CustomList = React.memo(({ data }) => {
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

  return (
    <GridStyled container>
      {data.map((item, idx) => (
        <DataContext.Provider key={idx} value={[item, idx]}>
          <MemoItem item={item} />
        </DataContext.Provider>
      ))}
    </GridStyled>
  );
});
