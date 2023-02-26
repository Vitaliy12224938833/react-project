import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { classContext } from '../../Context/Context';

export const Slide = ({ data, content, category }) => {
  if (!data) return;
  const className = useContext(classContext);
  const { backdrop_path, title, id } = data;
  return (
    <Link to={`/${content}/${category}/${title}/${id}`}>
      <img
        className={className}
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      ></img>
    </Link>
  );
};
