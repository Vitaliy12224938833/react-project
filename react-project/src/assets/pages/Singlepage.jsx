import { useGetRequest } from '../../HOOKs/useGetRequest';
import { generateURL } from '../../API/generate-url';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const Singlepage = () => {
  const { id, content } = useParams();
  const [data, setData] = useGetRequest();
  const url = generateURL(content, id, 'ru', 1);
  setData(url);
  console.log(data);
  return (
    <div>
      {data && (
        <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} />
      )}
    </div>
  );
};
