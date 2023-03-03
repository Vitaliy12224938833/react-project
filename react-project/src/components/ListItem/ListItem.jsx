import { Link } from 'react-router-dom';
import { MediaTypeForLinkContext } from '../../Context/Context';
import { SearcMediaTypeContext } from '../../Context/Context';
import { useContext } from 'react';
import './ListItem.css';

export const ListItem = ({ id, img, name, character, title, className }) => {
  const mediaType = useContext(MediaTypeForLinkContext);
  const searchMediaType = useContext(SearcMediaTypeContext);

  return (
    <li className={className} key={id}>
      <Link to={`/${mediaType || searchMediaType}/${name || title}/${id}`}>
        <img
          className='list-item-img'
          src={`https://image.tmdb.org/t/p/w200${img}`}
          alt={name || 'poster'}
        />
      </Link>
      {name && <p className='cast-name'>{name}</p>}
      {character && <p className='cast-character'>{character}</p>}
    </li>
  );
};
