import { useEffect, useState } from 'react';
import { Rewiev } from './Rewiev';
import axios from 'axios';
const API_KEY = '1f63914a91cb95d33f7d8d413f4c28ca';

export const Rewievs = ({ id, content }) => {
  const [rewievsData, setRewievsData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => setRewievsData(res.data));
  }, [id]);
  console.log(rewievsData);
  return (
    <div>
      {rewievsData && (
        <div>
          {rewievsData.results.map((item) => (
            <Rewiev key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};
