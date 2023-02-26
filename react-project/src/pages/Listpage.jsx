import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateURL } from '../API/generate-url';
import { useInfinityList } from '../HOOKs/useInfinityList';
import { ListItem } from '../components/ListItem/ListItem';
import { List } from '../components/List/List';

export const Listpage = () => {
  const { content, category } = useParams();
  const [page, setPage] = useState(1);

  const defaultContent = content ? content : 'movie';
  const defaultCategory = category ? category : 'popular';

  const url = generateURL(defaultContent, defaultCategory, 'en-US', page);

  const [list, loader] = useInfinityList(url, page, setPage, content, category);

  return (
    <div className='list-conteiner'>
      {list && (
        <List data={list} className={'content-list'}>
          {(id, title, poster_path, name) => (
            <ListItem
              key={id}
              id={id}
              // name={title}
              img={poster_path}
              categories={[defaultContent, defaultCategory]}
            />
          )}
        </List>
      )}
      {loader && <div className='loader'>Loading....</div>}
    </div>
  );
};
