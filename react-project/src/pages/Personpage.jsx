import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import { PersonDerscription } from '../components/Descriptions/Person-description';
import { API_KEY } from '../data';
import { Loader } from '../components/Loader/Loader';
import { useFetchData } from '../HOOKs/useFetchData';

export const Personpage = () => {
  const { id } = useParams();

  const pageDataUrl = `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`;

  const [pageData, isPageDataLoading] = useFetchData(pageDataUrl, null);

  if (!isPageDataLoading) return <Loader />;

  return (
    <Container maxWidth='xl' sx={{ marginTop: '150px' }}>
      <PersonDerscription data={pageData} />
    </Container>
  );
};
