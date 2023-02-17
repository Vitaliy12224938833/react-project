import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../API/get-data-from-api';
import { generateURL } from '../../API/generate-url';

export const Singlepage = () => {
  const { id, content } = useParams();
  const [contentData, setContentData] = useState(null);

  const url = generateURL(content, id, 'ru', 1);

  useEffect(() => {
    (async () => setContentData(await getData(url)))();
  }, []);
  console.log(contentData);
  return (
    <div>
      {contentData && (
        <img
          src={`https://image.tmdb.org/t/p/original${contentData.backdrop_path}`}
        />
      )}
    </div>
  );
};
