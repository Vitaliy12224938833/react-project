import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../API/get-data-from-api';
import { generateURL } from '../../API/generate-url';

import { Link, useParams } from 'react-router-dom';

export const Homepage = () => {
  const { content, categori } = useParams();
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const changePage = () => setPage(page + 1);
  console.log(categori);
  const url = generateURL(
    content ? content : 'movie',
    categori ? categori : 'popular',
    'ru',
    page
  );

  useEffect(() => {
    (async () =>
      setMoviesList(await getData(url).then((res) => res.results)))();
  }, [url]);
  return (
    <div>
      <ul>
        {moviesList.map((item) => (
          <li key={item.id}>
            <Link
              data={item}
              key={item.key}
              to={`/${content}/${categori}/${item.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
              <h2>{item.titel}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
