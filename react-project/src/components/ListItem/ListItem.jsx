import { Link } from 'react-router-dom';

export const ListItem = ({ id, img, name, categories }) => {
  const [content, category] = categories;
  return (
    <li>
      <Link to={`/${content}/${category}/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w400${img}`} alt={name} />
      </Link>
    </li>
  );
};
