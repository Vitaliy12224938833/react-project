import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useInfinityList } from '../HOOKs/useInfinityList';
import { CustomList } from '../components/List/List';
import { API_KEY } from '../data';
import { Container } from '@mui/material';
import { LinearLoadr } from '../components/Loader/LinearLoader';

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
      <Container sx={{ marginTop: 20 }} maxWidth='xl'>
        <CustomList data={list} mediaType={mediaType}></CustomList>
      </Container>
      {/* <LinearLoadr loader={loader} /> */}
    </>
  );
};
