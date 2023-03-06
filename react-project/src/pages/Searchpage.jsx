import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from '../components/List/List';
import { useInfinityList } from '../HOOKs/useInfinityList';
import { API_KEY } from '../data';
import { Container } from '@mui/material';

import { LinearLoadr } from '../components/Linear-loader/LinearLoader';
import { Margin } from '@mui/icons-material';

export const Searchpage = () => {
  const { query } = useParams();
  const [page, setPage] = useState(1);
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

  const [list, loader] = useInfinityList(url, page, setPage, query);

  return (
    <>
      <LinearLoadr loader={loader} />
      <Container sx={{ marginTop: '40px' }} maxWidth='xl'>
        {list && <List data={list} className={'content-list'} />}
      </Container>
    </>
  );
};
