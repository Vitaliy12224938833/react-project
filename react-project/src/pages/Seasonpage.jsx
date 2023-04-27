import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import { EpisodesAccordions } from '../components/Accordions/EpisodesAccordions';
import HorizontalList from '../components/HorizontalList/HorizontalList';
import Description from '../components/Descriptions/Description';

import AllVidoeClips from '../components/Video/AllVidoeClips';
import { MediaTypeForLinkContext } from '../Context/Context';
import { Loader } from '../components/Loader/Loader';
import { useFetchData } from '../HOOKs/useFetchData';
import Trailer from '../components/Video/Trailer';

export const Seasonpage = React.memo(() => {
  const { id, seasonNum } = useParams();

  const pageParams = {
    mediaType: 'tv',
    id: id,
    seasonNum: seasonNum,
    language: 'en-US',
  };

  const videoParams = {
    ...pageParams,
    seasonNum: '',
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
        <Description data={pageData} isSeason={true} />
        <EpisodesAccordions list={pageData.episodes} />

        <MediaTypeForLinkContext.Provider value='person'>
          <HorizontalList
            id={id}
            mediaType='tv'
            category={'credits'}
            title='Cast'
            seasonNum={seasonNum}
          />
        </MediaTypeForLinkContext.Provider>
      </Container>
      <AllVidoeClips data={videosList} />
    </>
  );
});
