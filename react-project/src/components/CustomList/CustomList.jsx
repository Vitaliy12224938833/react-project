import React from 'react';
import { ImageList } from '@mui/material';
import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Rating } from '@mui/material';
import { Typography } from '@mui/material';

import { DataContext } from '../../Context/Context';
import { ImageListItem } from '@mui/material';
import { CustomImg } from '../CustomImg/CustomImg';
import { RouteContext } from '../../Context/Context';

function Item({ item }) {
  const { poster_path, profile_path } = item;
  const imageListItemSx = {
    position: 'relative',
    borderRadius: '3%',
    transition: 'all 0.2s',
    '&:hover': {
      boxShadow: 10,
    },
  };
  if (poster_path || profile_path) {
    return (
      <ImageListItem sx={imageListItemSx}>
        <CustomLink />
        <ReleaseAndRating />
      </ImageListItem>
    );
  }
}

const CustomLink = () => {
  const [{ name, id, media_type, poster_path, profile_path }] =
    useContext(DataContext);
  const mediaType = useContext(RouteContext);
  return (
    <Link to={`/${mediaType || media_type}/${name}/${id}`}>
      <CustomImg
        src={`https://image.tmdb.org/t/p/w200${poster_path || profile_path}`}
        alt={name}
      />
    </Link>
  );
};

const transformDate = (date) => date && useMemo(() => date.slice(0, 4), [date]);
const ReleaseAndRating = () => {
  const [{ vote_average, release_date, first_air_date }] =
    useContext(DataContext);
  return (
    (!!vote_average || release_date || first_air_date) && (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: -35,
          width: '100%',
        }}
      >
        <Typography variant='caption'>
          {transformDate(release_date || first_air_date)}
        </Typography>
        <Rating
          size='small'
          name='half-rating-read'
          value={vote_average / 2}
          precision={0.5}
          readOnly
        />
      </Box>
    )
  );
};

const MemoItem = React.memo(Item, () => true);

export const CustomList = React.memo(
  ({ data }) => {
    return (
      <ImageList
        gap={50}
        variant='quilted'
        cols={6}
        sx={{ overflow: 'inherit' }}
      >
        {data.map((item, idx) => (
          <DataContext.Provider key={idx} value={[item, idx]}>
            <MemoItem item={item} />
          </DataContext.Provider>
        ))}
      </ImageList>
    );
  },
  (prev, next) => {
    if (prev.data.length < next.data.length) return false;
    return true;
  }
);
