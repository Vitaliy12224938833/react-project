import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PersonDerscription } from '../components/Descriptions/Person-description';
import { API_KEY } from '../data';
import { Container } from '@mui/material';
export const Personpage = () => {
  const { id } = useParams();
  const [personData, setPersonData] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setPersonData(res.data));
  }, [id]);

  return (
    <Container maxWidth='xl'>
      <PersonDerscription data={personData} />
    </Container>
  );
};
