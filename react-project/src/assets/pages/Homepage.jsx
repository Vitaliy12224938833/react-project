import { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../../API/get-data-from-api';
import { generateURL } from '../../API/generate-url';
import { useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Homepage = () => {
  console.log([useParams()]);
  const { content } = useParams();
  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);

  const changePage = () => setPage(page + 1);

  const url = generateURL(content, 'popular', 'ru', page);
  console.log(url);
  useEffect(() => {
    (async () =>
      setMoviesList(await getData(url).then((res) => res.results)))();
  }, [url]);
  return (
    <div>
      <ul>
        {moviesList.map((item) => (
          <li key={item.id}>
            <Link key={item.key} to={`/${content}/${item.id}`}>
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
