import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PersonDerscription } from '../components/Descriptions/Person-description';
const API_KEY = '1f63914a91cb95d33f7d8d413f4c28ca';

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
    <div>
      <PersonDerscription data={personData} />
    </div>
  );
};
