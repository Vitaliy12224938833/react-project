import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from '@mui/material';

import { SeasonsAccordions } from '../components/Accordions/SeasonsAccordions';
import { HorizontalList } from '../components/HorizontalList/HorizontalList';
import { Description } from '../components/Descriptions/Description';

import { AllVidoeClips } from '../components/Video/AllVidoeClips';
import { MediaTypeForLinkContext } from '../Context/Context';
import { Reviews } from '../components/Reviews/Reviews';
import { Loader } from '../components/Loader/Loader';
import { useFetchData } from '../HOOKs/useFetchData';
import { API_KEY } from '../data';
import { Trailer } from '../components/Video/Trailer';

export const Serialspage = () => {
  const { id } = useParams();

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
    <>
      <Trailer list={videosList} />
      <Container maxWidth='xl'>
        <Description data={pageData} />
        <SeasonsAccordions list={pageData.seasons} />
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
    </>
  );
};
