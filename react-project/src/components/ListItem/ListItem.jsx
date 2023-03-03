import { Link } from 'react-router-dom';
import './ListItem.css';
export const ListItem = ({
  id,
  img,
  name,
  character,
  title,
  className,
  mediaType,
}) => {
  return (
    <li className={className} key={id}>
      {
        <>
          <Link to={`/${mediaType}/${name || title}/${id}`}>
            <img
              className='list-item-img'
              src={`https://image.tmdb.org/t/p/w200${img}`}
              alt={name || 'poster'}
            />
          </Link>
          {name && <p className='cast-name'>{name}</p>}
          {character && <p className='cast-character'>{character}</p>}
        </>
      }
    </li>
  );
};
