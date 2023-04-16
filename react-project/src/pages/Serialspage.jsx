import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import { SeasonsAccordions } from '../components/Accordions/SeasonsAccordions';
import HorizontalList from '../components/HorizontalList/HorizontalList';
import Description from '../components/Descriptions/Description';

import AllVidoeClips from '../components/Video/AllVidoeClips';
import { MediaTypeForLinkContext } from '../Context/Context';
import Reviews from '../components/Reviews/Reviews';
import { Loader } from '../components/Loader/Loader';
import { useFetchData } from '../HOOKs/useFetchData';
import Trailer from '../components/Video/Trailer';
import MediaSaveButtons from '../components/SavedList/MediaSaveButtons';

export const Serialspage = React.memo(() => {
  const { id } = useParams();
  const pageParams = {
    mediaType: 'tv',
    id: id,
    language: 'en-US',
  };

  const videoParams = {
    ...pageParams,
    dataType: 'videos',
  };
  const [pageData, isPageLoading, setPageParams, setPageLoading] =
    useFetchData(pageParams);
  const [videosData, isVideosLoading, setVideosParams, setVideosLoading] =
    useFetchData(videoParams);

  useEffect(() => {
    setPageParams({ ...pageParams, id: id });
    setVideosParams({ ...videoParams, id: id });
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
        <MediaSaveButtons id={id} mediaType='tv' />
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
});
