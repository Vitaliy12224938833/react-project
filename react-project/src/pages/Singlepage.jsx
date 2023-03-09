import { useParams } from 'react-router-dom';
import { Desciprion } from '../components/Descriptions/Description';
import { HorizontalList } from '../components/HorizontalList/HorizontalList';
import { useEffect } from 'react';
import { useState } from 'react';
import { VideoTrailler } from '../components/Video/YouTobeVideo';
import { AllVidoeClips } from '../components/Video/AllVidoeClips';
import { Reviews } from '../components/Reviews/Reviews';
import { API_KEY } from '../data';
import { MediaTypeForLinkContext } from '../Context/Context';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { Loader } from '../components/Loader/Loader';
import axios from 'axios';

export const Singlepage = () => {
  const { id, mediaType } = useParams();
  const [pageData, setPageData] = useState(null);
  const [videosList, setVideosList] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoad(false);
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setVideosList(res.data.results))
      .then(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`
          )
          .then((res) => setPageData(res.data))
          .finally(() => setIsLoad(true));
      });
  }, [id]);

  if (!isLoad) return <Loader />;

  return (
    <Box sx={{ marginTop: 10 }}>
      <VideoTrailler
        data={videosList
          .filter((item) => item.type === 'Trailer' && item.official)
          .pop()}
      />
      <Container maxWidth='xl'>
        <Desciprion data={pageData} />

        <MediaTypeForLinkContext.Provider value='person'>
          <HorizontalList
            id={id}
            mediaType={mediaType}
            category={'credits'}
            title='Cast'
          />
        </MediaTypeForLinkContext.Provider>
      </Container>

      <AllVidoeClips data={videosList} />

      <Container maxWidth='xl'>
        <MediaTypeForLinkContext.Provider value={mediaType}>
          <HorizontalList
            id={id}
            mediaType={mediaType}
            category={'recommendations'}
            title='Recommendations'
          />
        </MediaTypeForLinkContext.Provider>
        <MediaTypeForLinkContext.Provider value={mediaType}>
          <HorizontalList
            id={id}
            mediaType={mediaType}
            category={'similar'}
            title='Similar'
          />
        </MediaTypeForLinkContext.Provider>
        <Reviews id={id} mediaType={mediaType} />
      </Container>
    </Box>
  );
};
