import { useGetRequest } from '../../HOOKs/useGetRequest';
import { generateURL } from '../../API/generate-url';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import YouTube from 'react-youtube';
import '../../styles/Singlepage.css';

export const Singlepage = () => {
  const { id, content } = useParams();

  const url = generateURL(content, id, 'en-US', 1);
  const [pageData] = useGetRequest(url);
  const [videosData] = useGetRequest(
    `https://api.themoviedb.org/3/${content}/${id}/videos?api_key=1f63914a91cb95d33f7d8d413f4c28ca&language=en-US`
  );
  return (
    <div>
      {pageData && videosData && (
        <div className='conteiner'>
          {videosData.results.map((item) => {
            const { key, official, type } = item;
            if ((official, type === 'Trailer'))
              return (
                <YouTube
                  key={key}
                  videoId={key}
                  opts={{
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                  iframeClassName='trailer'
                />
              );
          })}
        </div>
      )}
    </div>
  );
};
