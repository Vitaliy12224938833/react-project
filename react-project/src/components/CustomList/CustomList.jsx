import { Link } from 'react-router-dom';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import { CustomImg } from '../CustomImg/CustomImg';
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import { DataContext } from '../../Context/Context';
import { RouteContext } from '../../Context/Context';
import { useContext } from 'react';

export const CustomList = ({ data }) => {
  const idsArray = [];

  const transformDate = (date) => date && date.slice(0, 4);

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

  const Item = () => {
    const [{ id, poster_path, profile_path }, idx] = useContext(DataContext);

    const imageListItemSx = {
      position: 'relative',
      borderRadius: '3%',
      transition: 'all 0.2s',
      '&:hover': {
        boxShadow: 10,
      },
    };

    if (idx >= 1) idsArray.push(data[idx - 1].id);
    if ((poster_path || profile_path) && !idsArray.includes(id))
      return (
        <ImageListItem sx={imageListItemSx}>
          <CustomLink />
          <ReleaseAndRating />
        </ImageListItem>
      );
  };

  return (
    <ImageList gap={50} variant='quilted' cols={6} sx={{ overflow: 'inherit' }}>
      {data.map((item, idx) => (
        <DataContext.Provider key={item.id} value={[item, idx]}>
          <Item />
        </DataContext.Provider>
      ))}
    </ImageList>
  );
};
