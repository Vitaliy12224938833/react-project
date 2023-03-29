import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useInfinityList } from '../HOOKs/useInfinityList';
import { CustomList } from '../components/CustomList/CustomList';
import { API_KEY } from '../data';
import { Container } from '@mui/material';
import { Loader } from '../components/Loader/Loader';
import { RouteContext } from '../Context/Context';
import { ListWrapper } from '../components/Wrappers/ListWrpapper';
export const Listpage = () => {
  const { mediaType, category } = useParams();

  const url = `https://api.themoviedb.org/3/${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=`;
  const [list, isLoading, setUrl] = useInfinityList(url);

  useEffect(() => {
    setUrl(url);
  }, [mediaType, category]);
  if (!isLoading) return <Loader />;

  return (
    <Container maxWidth='xl'>
      <ListWrapper>
        <RouteContext.Provider value={mediaType}>
          <CustomList data={list}></CustomList>
        </RouteContext.Provider>
      </ListWrapper>
    </Container>
  );
};
