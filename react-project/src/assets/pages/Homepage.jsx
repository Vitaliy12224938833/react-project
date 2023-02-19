import { useState, useEffect } from 'react';
import { generateURL } from '../../API/generate-url';
import { Link, useParams } from 'react-router-dom';
import { getData } from '../../API/get-data-from-api';
import '../../App.css';

export const Homepage = () => {
  const { content, category } = useParams();
  const [page, setPage] = useState(1);
  const defaultContent = content ? content : 'movie';
  const defaultCategory = category ? category : 'popular';
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [isStatList, setStartlist] = useState(true);

  useEffect(() => {
    setPage(1);
    setFetching(true);
    setStartlist(true);
  }, [content, category]);

  const url = generateURL(defaultContent, defaultCategory, 'ru', page);

  useEffect(() => {
    if (fetching) {
      getData(url)
        .then((res) => {
          if (!isStatList) {
            setData([...data, ...res.results]);
          } else {
            setData(res.results);
          }
          setPage(page + 1);
        })
        .finally(() => {
          setStartlist(false);
          setFetching(false);
        });
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setStartlist(false);
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className='conteiner'>
      {data && (
        <ul className='content-list'>
          {data.map((item) => {
            const { id, title, poster_path, name } = item;
            return (
              <li key={id}>
                <Link to={`/${defaultContent}/${defaultCategory}/${id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                    alt={title || name}
                  />
                  <h2>{title || name}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
