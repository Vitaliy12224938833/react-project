import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CustomList } from '../components/CustomList/CustomList';
import { useInfinityList } from '../HOOKs/useInfinityList';

import { Container } from '@mui/material';
import { Loader } from '../components/Loader/Loader';

export const Searchpage = React.memo(() => {
  const { query } = useParams();
  const params = {
    mediaType: 'search',
    id: 'multi',
    language: 'en-US',
    query: query,
  };
  const [list, isLoading, setParams] = useInfinityList(params);

  useEffect(() => {
    setParams({ ...params, query: query });
  }, [query]);

  if (!isLoading) return <Loader />;

  return (
    <Container sx={{ marginTop: '40px' }} maxWidth='xl'>
      <CustomList data={list} />
    </Container>
  );
});
