import { useState } from 'react';
import { generateURL } from '../../API/generate-url';
import { useGetRequest } from '../../HOOK/useGetRequest';
import { Link, useParams } from 'react-router-dom';
import '../../App.css';

export const Homepage = () => {
  const { content, category } = useParams();
  const [page, setPage] = useState(1);
  // const changePage = () => setPage(page + 1);
  const defaultContent = content ? content : 'movie';
  const defaultCategory = category ? category : 'popular';
  const url = generateURL(defaultContent, defaultCategory, 'ru', page);

  const [data, setData] = useGetRequest();
  setData(url);

  return (
    <div className='conteiner'>
      {data && (
        <ul className='content-list'>
          {data.results.map((item) => {
            const { id, title, poster_path } = item;
            return (
              <li key={id}>
                <Link to={`/${defaultContent}/${defaultCategory}/${id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                    alt={title}
                  />
                  <h2>{title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
