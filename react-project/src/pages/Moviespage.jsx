import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import { Description } from '../components/Descriptions/Description';
import { HorizontalList } from '../components/HorizontalList/HorizontalList';
import { VideoTrailer } from '../components/Video/VideoTrailler';
import { AllVidoeClips } from '../components/Video/AllVidoeClips';
import { Reviews } from '../components/Reviews/Reviews';
import { API_KEY } from '../data';
import { MediaTypeForLinkContext } from '../Context/Context';
import { Loader } from '../components/Loader/Loader';
import { useFetchData } from '../HOOKs/useFetchData';
import { TrailerWrapper } from '../components/Wrappers/TrailerWrapper';
export const Moviespage = () => {
  const { id } = useParams();

  const pageDataUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const videosDataUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;

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
      <TrailerWrapper>
        <VideoTrailer
          data={videosList
            .filter((item) => item.type === 'Trailer' && item.official)
            .pop()}
        />
      </TrailerWrapper>

      <Container maxWidth='xl'>
        <Description data={pageData} />

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
    </>
  );
};
