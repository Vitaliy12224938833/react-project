import { Link } from 'react-router-dom';
import './ListItem.css';
export const ListItem = ({ id, img, name, categories }) => {
  const [content, category] = categories;
  return (
    <li className='list-item' key={id}>
      {
        <Link to={`/${content}/${category}/${name}/${id}`}>
          <img
            className='list-item-img'
            src={`https://image.tmdb.org/t/p/w200${img}`}
            alt={name}
          />
        </Link>
      }
    </li>
  );
};
