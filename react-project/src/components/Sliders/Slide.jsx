import { Link } from 'react-router-dom';

export const Slide = ({ data, content, category, className }) => {
  if (!data) return;
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
