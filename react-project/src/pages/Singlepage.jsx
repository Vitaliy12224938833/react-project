import { useParams } from 'react-router-dom';
import { Desciprion } from '../components/Descriptions/Description';
import { HorizontalList } from '../components/HorizontalList/HorizontalList';
import { useEffect } from 'react';
import { useState } from 'react';
import { VideoTrailler } from '../components/Video/YouTobeVideo';
import { AllVidoeClips } from '../components/Video/AllVidoeClips';
import { Reviews } from '../components/Rewievs/Reviews';
import { API_KEY } from '../data';
import axios from 'axios';

export const Singlepage = () => {
  const { id, mediaType } = useParams();

  const [pageList, setPageList] = useState(null);
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setPageList(res.data));
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setVideosList(res.data.results));
  }, [id]);

  return (
    <div className='conteiner'>
      {videosList && (
        <VideoTrailler
          data={videosList
            .filter((item) => item.type === 'Trailer' && item.official)
            .pop()}
          className='trailer'
        />
      )}
      {pageList && <Desciprion data={pageList} />}
      <HorizontalList
        id={id}
        mediaType={mediaType}
        category={'credits'}
        title='Cast'
        madiaTypeForLink='person'
      />
      {videosList && <AllVidoeClips data={videosList} />}
      <HorizontalList
        id={id}
        mediaType={mediaType}
        category={'recommendations'}
        title='Recommendations'
        madiaTypeForLink={mediaType}
      />
      <HorizontalList
        id={id}
        mediaType={mediaType}
        category={'similar'}
        title='Similar'
        madiaTypeForLink={mediaType}
      />
      <Reviews id={id} mediaType={mediaType} />
    </div>
  );
};
