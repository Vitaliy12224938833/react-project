import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PersonDerscription } from '../components/Descriptions/Person-description';
import { API_KEY } from '../data';
import { Container } from '@mui/material';
import { Loader } from '../components/Loader/Loader';

export const Personpage = () => {
  const { id } = useParams();
  const [personData, setPersonData] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setPersonData(res.data))
      .finally(() => setIsLoad(true));
  }, [id]);

  if (!isLoad) return <Loader />;

  return (
    <Container maxWidth='xl' sx={{ marginTop: '150px' }}>
      <PersonDerscription data={personData} />
    </Container>
  );
};
