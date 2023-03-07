import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Loader } from '../Loader/Loader';
import { CustomImg } from '../CustomImg/CustomImg';

export const CustomList = ({ data, mediaType }) => {
  if (!data) return <Loader />;

  const idArray = [];

  return (
    <ImageList gap={50} variant='quilted' cols={6} sx={{ overflow: 'inherit' }}>
      {data.map((item, idx) => {
        const { id, title, poster_path, name, profile_path } = item;

        if (idx >= 1) idArray.push(data[idx - 1].id);

        if ((poster_path || profile_path) && !idArray.includes(id))
          return (
            <ImageListItem
              key={id}
              sx={{
                borderRadius: '3%',
                transition: 'all 0.2s',
                '&:hover': {
                  boxShadow: 10,
                },
              }}
            >
              <Link to={`/${mediaType}/${name || title}/${id}`}>
                <CustomImg
                  src={`https://image.tmdb.org/t/p/w200${
                    poster_path || profile_path
                  }`}
                  alt={name || title}
                />
              </Link>
            </ImageListItem>
          );
      })}
    </ImageList>
  );
};
