import { Link } from 'react-router-dom';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import { CustomImg } from '../CustomImg/CustomImg';
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
export const CustomList = ({ data, mediaType }) => {
  const idsArray = [];

  const imageListItemSx = {
    position: 'relative',
    borderRadius: '3%',
    transition: 'all 0.2s',
    '&:hover': {
      boxShadow: 10,
    },
  };

  const transformDate = (date) => date && date.slice(0, 4);

  const CustomLink = ({ mediaType, id, name, img }) => (
    <Link to={`/${mediaType}/${name}/${id}`}>
      <CustomImg src={`https://image.tmdb.org/t/p/w200${img}`} alt={name} />
    </Link>
  );

  const ReleaseAndRating = ({ data }) =>
    data.vote_average && (
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
          {transformDate(data.release_date || data.first_air_date)}
        </Typography>
        <Rating
          size='small'
          name='half-rating-read'
          value={data.vote_average / 2}
          precision={0.5}
          readOnly
        />
      </Box>
    );

  const Item = ({ item, idx }) => {
    const { id, title, poster_path, name, profile_path, media_type } = item;

    if (idx >= 1) idsArray.push(data[idx - 1].id);
    if ((poster_path || profile_path) && !idsArray.includes(id))
      return (
        <ImageListItem sx={imageListItemSx}>
          <CustomLink
            mediaType={mediaType || media_type}
            img={poster_path || profile_path}
            name={title || name}
            id={id}
          />
          <ReleaseAndRating data={item} />
        </ImageListItem>
      );
  };

  return (
    <ImageList gap={50} variant='quilted' cols={6} sx={{ overflow: 'inherit' }}>
      {data.map((item, idx) => (
        <Item key={item.id} item={item} idx={idx} />
      ))}
    </ImageList>
  );
};
