import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from '../components/List/List';
import { ListItem } from '../components/ListItem/ListItem';
import { Search } from '../components/Search/Search';
import axios from 'axios';

const API_KEY = '1f63914a91cb95d33f7d8d413f4c28ca';

export const Searchpage = () => {
  const { content, query } = useParams();
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/${content}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
      )
      .then((res) => setData(res.data.results));
  }, [query]);

  return (
    <>
      <Search content={content} />
      {data && (
        <List data={data} className={'content-list'}>
          {(id, title, poster_path) => (
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
    </>
  );
};
