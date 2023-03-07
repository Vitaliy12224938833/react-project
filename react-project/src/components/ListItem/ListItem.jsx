import { Link } from 'react-router-dom';
import { MediaTypeForLinkContext } from '../../Context/Context';
import { SearcMediaTypeContext } from '../../Context/Context';
import { useContext } from 'react';
import { CustomImg } from '../CustomImg/CustomImg';

export const ListItem = ({ id, img, name, character, title, className }) => {
  const mediaType = useContext(MediaTypeForLinkContext);
  const searchMediaType = useContext(SearcMediaTypeContext);

  return (
    <ListItem sx={{ boxShadow: 1 }} key={id}>
      <Link to={`/${mediaType || searchMediaType}/${name || title}/${id}`}>
        <CustomImg
          src={`https://image.tmdb.org/t/p/w200${img}`}
          alt={name || 'poster'}
        />
      </Link>
      {name && <p className='cast-name'>{name}</p>}
      {character && <p className='cast-character'>{character}</p>}
    </ListItem>
  );
};
