import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useInfinityList } from '../HOOKs/useInfinityList';
import { CustomList } from '../components/CustomList/CustomList';
import { API_KEY } from '../data';
import { Container } from '@mui/material';
// import { LinearLoadr } from '../components/Loader/LinearLoader';
import { Loader } from '../components/Loader/Loader';

export const Listpage = () => {
  const { mediaType, category } = useParams();
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(false);
  }, [mediaType, category]);

  const url = `https://api.themoviedb.org/3/${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;

  const [list, load] = useInfinityList(url, page, setPage, mediaType, category);

  useEffect(() => {
    if (load) setIsLoad(true);
  }, [load]);

  if (!isLoad) return <Loader />;

  return (
    <>
      <Container sx={{ marginTop: 20 }} maxWidth='xl'>
        <CustomList data={list} mediaType={mediaType}></CustomList>
      </Container>
      {/* <LinearLoadr loader={loader} /> */}
    </>
  );
};
