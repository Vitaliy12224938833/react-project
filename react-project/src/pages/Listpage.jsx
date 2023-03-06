import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useInfinityList } from '../HOOKs/useInfinityList';
import { List } from '../components/List/List';
import { API_KEY } from '../data';
import { Container } from '@mui/material';
import { LinearLoadr } from '../components/Linear-loader/LinearLoader';

export const Listpage = () => {
  const { mediaType, category } = useParams();
  const [page, setPage] = useState(1);
  const url = `https://api.themoviedb.org/3/${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;
  const [list, loader] = useInfinityList(
    url,
    page,
    setPage,
    mediaType,
    category
  );

  return (
    <>
      <LinearLoadr loader={loader} />
      <Container sx={{ marginTop: '100px' }} maxWidth='xl'>
        {list && <List data={list} mediaType={mediaType}></List>}
      </Container>
    </>
  );
};
