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

export const Moviespage = () => {
  const { id } = useParams();
  console.log(useParams());
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
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setVideosList(res.data.results))
      .then(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
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
            mediaType='movie'
            category={'credits'}
            title='Cast'
          />
        </MediaTypeForLinkContext.Provider>
      </Container>

      <AllVidoeClips data={videosList} />

      <Container maxWidth='xl'>
        <MediaTypeForLinkContext.Provider value='movie'>
          <HorizontalList
            id={id}
            mediaType='movie'
            category={'recommendations'}
            title='Recommendations'
          />
          <HorizontalList
            id={id}
            mediaType='movie'
            category={'similar'}
            title='Similar'
          />
        </MediaTypeForLinkContext.Provider>
        <Reviews id={id} mediaType='movie' />
      </Container>
    </Box>
  );
};
