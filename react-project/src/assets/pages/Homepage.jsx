import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../API/get-data-from-api';
import { generateURL } from '../../API/generate-url';

import { Link, useParams } from 'react-router-dom';

export const Homepage = () => {
  const { content, category } = useParams();
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const changePage = () => setPage(page + 1);

  const url = generateURL(
    content ? content : 'movie',
    category ? category : 'popular',
    'ru',
    page
  );
  console.log(moviesList);
  useEffect(() => {
    (async () =>
      setMoviesList(await getData(url).then((res) => res.results)))();
  }, [url, content, category]);
  return (
    <div className='conteiner'>
      <ul className='content-list'>
        {moviesList.map((item) => {
          const { id, title, poster_path } = item;
          return (
            <li key={id}>
              <Link to={`/${content}/${category}/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
                <h2>{title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
