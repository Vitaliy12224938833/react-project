import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useInfinityList } from '../HOOKs/useInfinityList';
import { ListItem } from '../components/ListItem/ListItem';
import { List } from '../components/List/List';
import { Search } from '../components/Search/Search';
import { API_KEY } from '../data';

export const Listpage = () => {
  const { content, category } = useParams();
  const [page, setPage] = useState(1);

  const defaultContent = content ? content : 'movie';
  const defaultCategory = category ? category : 'popular';

  const url = `https://api.themoviedb.org/3/${defaultContent}/${defaultCategory}?api_key=${API_KEY}&language=en-US&page=${page}`;

  const [list, loader] = useInfinityList(url, page, setPage, content, category);

  return (
    <>
      <Search content={content} />
      <div className='list-conteiner'>
        {list && (
          <List data={list} className={'content-list'}>
            {(id, title, poster_path, name) => (
              <ListItem
                key={id}
                id={id}
                title={title}
                name={name}
                img={poster_path}
                categories={[defaultContent, defaultCategory]}
              />
            )}
          </List>
        )}
        {loader && <div className='loader'>Loading....</div>}
      </div>
    </>
  );
};
