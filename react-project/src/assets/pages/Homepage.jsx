import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateURL } from '../../API/generate-url';
import { useInfinityList } from '../../HOOKs/useInfinityList';
import { ListItem } from '../../components/ListItem/ListItem';
import '../../App.css';

export const Homepage = () => {
  const { content, category } = useParams();
  const [page, setPage] = useState(1);

  const defaultContent = content ? content : 'movie';
  const defaultCategory = category ? category : 'popular';

  const url = generateURL(defaultContent, defaultCategory, 'en-US', page);

  const [list, loader] = useInfinityList(url, page, setPage, content, category);

  return (
    <div className='conteiner'>
      {list && (
        <ul className='content-list'>
          {list.map((item) => {
            const { id, title, poster_path, name } = item;
            return (
              <ListItem
                key={id}
                id={id}
                name={title || name}
                img={poster_path}
                categories={[defaultContent, defaultCategory]}
              />
            );
          })}
        </ul>
      )}
      {loader && <div className='loader'>Loading....</div>}
    </div>
  );
};
