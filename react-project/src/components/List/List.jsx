import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { CustomImg } from '../CustomImg/CustomImg';

export const CustomList = ({ data, mediaType }) => {
  const idsArray = [];

  const imageListItemSx = {
    borderRadius: '3%',
    transition: 'all 0.2s',
    '&:hover': {
      boxShadow: 10,
    },
  };

  const CustomLink = ({ mediaType, id, name, img }) => (
    <Link to={`/${mediaType}/${name}/${id}`}>
      <CustomImg src={`https://image.tmdb.org/t/p/w200${img}`} alt={name} />
    </Link>
  );

  const Item = ({ item, idx }) => {
    const { id, title, poster_path, name, profile_path, media_type } = item;
    if (idx >= 1) idsArray.push(data[idx - 1].id);
    if ((poster_path || profile_path) && !idsArray.includes(id))
      return (
        <ImageListItem key={id} sx={imageListItemSx}>
          <CustomLink
            mediaType={mediaType || media_type}
            img={poster_path || profile_path}
            name={title || name}
            id={id}
          />
        </ImageListItem>
      );
  };

  return (
    <ImageList gap={50} variant='quilted' cols={6} sx={{ overflow: 'inherit' }}>
      {data.map((item, idx) => (
        <Item item={item} idx={idx} />
      ))}
    </ImageList>
  );
};
