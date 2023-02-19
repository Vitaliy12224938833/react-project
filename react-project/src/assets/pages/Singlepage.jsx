import { useGetRequest } from '../../HOOKs/useGetRequest';
import { generateURL } from '../../API/generate-url';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import YouTube from 'react-youtube';

export const Singlepage = () => {
  const { id, content } = useParams();

  const url = generateURL(content, id, 'en-US', 1);
  const [pageData] = useGetRequest(url);
  const [videosData] = useGetRequest(
    `https://api.themoviedb.org/3/${content}/${id}/videos?api_key=1f63914a91cb95d33f7d8d413f4c28ca&language=en-US`
  );
  console.log(videosData);
};
