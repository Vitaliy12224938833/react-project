import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './List.css';

export const List = ({ data, defaultMediaType }) => {
  const idArray = [];

  return (
    <ImageList gap={55} cols={6}>
      {data.map((item, idx) => {
        const { id, title, poster_path, name, profile_path } = item;
        if (idx >= 1) idArray.push(data[idx - 1].id);
        if ((poster_path || profile_path) && !idArray.includes(id))
          return (
            <ImageListItem sx={{ width: 200, height: 300 }}>
              <Link to={`/${defaultMediaType}/${name || title}/${id}`}>
                <img
                  className='list-item-img'
                  src={`https://image.tmdb.org/t/p/w200${
                    poster_path || profile_path
                  }`}
                  alt={name || title}
                  loading='lazy'
                />
              </Link>
            </ImageListItem>
          );
      })}
    </ImageList>
  );
};
