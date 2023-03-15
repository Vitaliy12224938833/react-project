import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

import { SeasonsAccordions } from '../components/Accordions/SeasonsAccordions';
import { HorizontalList } from '../components/HorizontalList/HorizontalList';
import { Desciprion } from '../components/Descriptions/Description';
import { VideoTrailler } from '../components/Video/VideoTrailler';
import { AllVidoeClips } from '../components/Video/AllVidoeClips';
import { MediaTypeForLinkContext } from '../Context/Context';
import { Reviews } from '../components/Reviews/Reviews';
import { Loader } from '../components/Loader/Loader';
import { RouteContext } from '../Context/Context';
import { useFetchData } from '../HOOKs/useFetchData';
import { API_KEY } from '../data';

export const Serialspage = () => {
  const { id, name } = useParams();

  const pageDataUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
  const videosDataUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`;

  const [pageData, isPageLoading, setPageDataUrl, setPageLoading] =
    useFetchData(pageDataUrl, null);
  const [videosData, isVideosLoading, setVideosDataUrl, setVideosLoading] =
    useFetchData(videosDataUrl, null);

  useEffect(() => {
    setPageDataUrl(pageDataUrl);
    setVideosDataUrl(videosDataUrl);
    setPageLoading(false);
    setVideosLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (!isPageLoading || !isVideosLoading) return <Loader />;
  const videosList = videosData.results;

  return (
    <Box sx={{ marginTop: 10 }}>
      <VideoTrailler
        data={videosList
          .filter((item) => item.type === 'Trailer' && item.official)
          .pop()}
      />
      <Container maxWidth='xl'>
        <Desciprion data={pageData} />
        <RouteContext.Provider value={{ id, name }}>
          <SeasonsAccordions list={pageData.seasons} />
        </RouteContext.Provider>

        <MediaTypeForLinkContext.Provider value='person'>
          <HorizontalList
            id={id}
            mediaType='tv'
            category={'credits'}
            title='Cast'
          />
        </MediaTypeForLinkContext.Provider>
      </Container>

      <AllVidoeClips data={videosList} />

      <Container maxWidth='xl'>
        <MediaTypeForLinkContext.Provider value='tv'>
          <HorizontalList
            id={id}
            mediaType='tv'
            category={'recommendations'}
            title='Recommendations'
          />
          <HorizontalList
            id={id}
            mediaType='tv'
            category={'similar'}
            title='Similar'
          />
        </MediaTypeForLinkContext.Provider>
        <Reviews id={id} mediaType='tv' />
      </Container>
    </Box>
  );
};
