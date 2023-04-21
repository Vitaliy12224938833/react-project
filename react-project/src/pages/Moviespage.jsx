import React, { useEffect, useCallback, useMemo } from 'react';
import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { MediaTypeForLinkContext } from '../Context/Context';
import { Loader } from '../components/Loader/Loader';
import { useFetchData } from '../HOOKs/useFetchData';

const Description = lazy(() =>
  import('../components/Descriptions/Description')
);
const HorizontalList = lazy(() =>
  import('../components/HorizontalList/HorizontalList')
);
const AllVidoeClips = lazy(() => import('../components/Video/AllVidoeClips'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Trailer = lazy(() => import('../components/Video/Trailer'));
const MediaSaveButtons = lazy(() =>
  import('../components/SavedList/MediaSaveButtons')
);

export const Moviespage = React.memo(() => {
  const { id } = useParams();

  const pageParams = {
    mediaType: 'movie',
    id: id,
    language: 'en-US',
  };

  const videoParams = {
    ...pageParams,
    dataType: 'videos',
  };

  console.log('render movei page ');

  const [pageData, isPageLoading, setPageParams, setPageLoading] =
    useFetchData(pageParams);

  const [videosData, isVideosLoading, setVideosParams, setVideosLoading] =
    useFetchData(videoParams);

  const handlePageParams = useCallback(() => {
    setPageParams({ ...pageParams, id: id });
  }, [id]);

  const handleVideosParams = useCallback(() => {
    setVideosParams({ ...videoParams, id: id });
  }, [id]);

  useEffect(() => {
    handlePageParams();
    handleVideosParams();
    setPageLoading(false);
    setVideosLoading(false);
    window.scrollTo(0, 0);
  }, [handlePageParams, handleVideosParams]);

  if (!isPageLoading || !isVideosLoading) return <Loader />;

  const videosList = videosData.results;

  return (
    <>
      <Trailer list={videosList} />

      <Container maxWidth='xl'>
        <Description data={pageData} />
        <MediaSaveButtons id={id} mediaType='movie' />
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
});
