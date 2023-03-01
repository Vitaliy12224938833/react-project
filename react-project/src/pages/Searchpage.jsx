import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from '../components/List/List';
import { ListItem } from '../components/ListItem/ListItem';
import { Search } from '../components/Search/Search';
import { useInfinityList } from '../HOOKs/useInfinityList';
import { API_KEY } from '../data';

export const Searchpage = () => {
  const { content, query } = useParams();
  const [page, setPage] = useState(1);

  const url = `https://api.themoviedb.org/3/search/${content}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
  const [list, loader] = useInfinityList(url, page, setPage, content, query);
  console.log(list);
  return (
    <>
      <Search content={'multi'} />
      {list && (
        <List data={list} className={'content-list'}>
          {(id, title, poster_path, name) => (
            <ListItem
              key={id}
              id={id}
              title={title}
              img={poster_path}
              categories={[content]}
            />
          )}
        </List>
      )}
      {loader && <div className='loader'>Loading....</div>}
    </>
  );
};
