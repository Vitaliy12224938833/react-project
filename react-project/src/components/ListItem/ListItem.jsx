import { Link } from 'react-router-dom';
import './ListItem.css';
export const ListItem = ({ id, img, name, categories, character }) => {
  const [content, category] = categories;
  return (
    <li className='list-item' key={id}>
      {
        <>
          <Link to={`/${content}/${category}/${name}/${id}`}>
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
