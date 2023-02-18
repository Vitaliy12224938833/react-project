import { useParams } from 'react-router-dom';
import { generateURL } from '../../API/generate-url';
import { useGetRequest } from '../../HOOK/useGetRequest';

export const Singlepage = () => {
  const { id, content } = useParams();
  const [data, setData] = useGetRequest();
  const url = generateURL(content, id, 'ru', 1);
  setData(url);

  return (
    <div>
      {data && (
        <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} />
      )}
    </div>
  );
};
