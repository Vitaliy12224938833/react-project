import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import { PersonDescription } from '../components/Descriptions/PersonDescription';
import { Loader } from '../components/Loader/Loader';
import { useFetchData } from '../HOOKs/useFetchData';
import React from 'react';

export const Personpage = React.memo(() => {
  const { id } = useParams();

  const params = { mediaType: 'person', id: id, language: 'en-US' };

  const [pageData, isPageDataLoading] = useFetchData(params);

  if (!isPageDataLoading) return <Loader />;

  return (
    <Container maxWidth='xl'>
      <PersonDescription data={pageData} />
    </Container>
  );
});
