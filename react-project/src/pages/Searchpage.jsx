import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from '../components/List/List';
import { useInfinityList } from '../HOOKs/useInfinityList';
import { API_KEY } from '../data';

export const Searchpage = () => {
  const { query } = useParams();
  const [page, setPage] = useState(1);
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

  const [list, loader] = useInfinityList(url, page, setPage, query);

  return (
    <>
      {list && <List data={list} className={'content-list'}></List>}
      {loader && <div className='loader'>Loading....</div>}
    </>
  );
};
