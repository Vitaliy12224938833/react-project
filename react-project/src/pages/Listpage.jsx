import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useInfinityList } from '../HOOKs/useInfinityList';
import { CustomList } from '../components/CustomList/CustomList';
import { Container } from '@mui/material';
import { Loader } from '../components/Loader/Loader';
import { RouteContext } from '../Context/Context';
import { ListWrapper } from '../components/Wrappers/ListWrpapper';

export const Listpage = React.memo(() => {
  const { mediaType, category } = useParams();
  const params = { mediaType: mediaType, id: category, language: 'en-US' };
  const [list, isLoading, setParams] = useInfinityList(params);
  console.log('render Listpage');

  const setParamsCallback = useCallback(() => {
    setParams({ mediaType: mediaType, id: category, language: 'en-US' });
  }, [mediaType, category, setParams]);

  useEffect(() => {
    setParamsCallback();
  }, [setParamsCallback]);

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
});
