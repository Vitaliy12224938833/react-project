import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';

import { CustomList } from '../components/CustomList/CustomList';
import { useInfinityList } from '../HOOKs/useInfinityList';
import { API_KEY } from '../data';
import { Container } from '@mui/material';
import { Loader } from '../components/Loader/Loader';
import { LinearLoadr } from '../components/Loader/LinearLoader';

export const Searchpage = () => {
  const { query } = useParams();
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=`;

  const [list, isLoading, setUrl] = useInfinityList(url);

  useEffect(() => {
    setUrl(url);
  }, [query]);

  if (!isLoading) return <Loader />;

  return (
    <Box sx={{ marginTop: 20 }}>
      <Container sx={{ marginTop: '40px' }} maxWidth='xl'>
        <CustomList data={list} />
      </Container>
    </Box>
  );
};
