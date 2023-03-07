import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CustomList } from '../components/List/List';
import { useInfinityList } from '../HOOKs/useInfinityList';
import { API_KEY } from '../data';
import { Container } from '@mui/material';

import { LinearLoadr } from '../components/Loader/LinearLoader';
import { Margin } from '@mui/icons-material';

export const Searchpage = () => {
  const { query } = useParams();
  const [page, setPage] = useState(1);
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

  const [list, loader] = useInfinityList(url, page, setPage, query);

  return (
    <>
      <Container sx={{ marginTop: '40px' }} maxWidth='xl'>
        <CustomList data={list} />
      </Container>
      {/* <LinearLoadr loader={loader} /> */}
    </>
  );
};
