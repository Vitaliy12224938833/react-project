import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { generateURL } from '../../API/generate-url';
import { useInfinityList } from '../../HOOKs/useInfinityList';
import '../../App.css';

export const Homepage = () => {
  const { content, category } = useParams();
  const [page, setPage] = useState(1);

  const defaultContent = content ? content : 'movie';
  const defaultCategory = category ? category : 'popular';

  const url = generateURL(defaultContent, defaultCategory, 'ru', page);

  const [list, loader] = useInfinityList(url, page, setPage, content, category);

  return (
    <div className='conteiner'>
      {list && (
        <ul className='content-list'>
          {list.map((item) => {
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
      {loader && <div className='loader'>Loading....</div>}
    </div>
  );
};
