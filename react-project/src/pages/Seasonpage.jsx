import { useParams } from 'react-router-dom';
import { Desciprion } from '../components/Descriptions/Description';
import { HorizontalList } from '../components/HorizontalList/HorizontalList';
import { VideoTrailler } from '../components/Video/YouTobeVideo';
import { AllVidoeClips } from '../components/Video/AllVidoeClips';
import { API_KEY } from '../data';
import { MediaTypeForLinkContext } from '../Context/Context';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { Loader } from '../components/Loader/Loader';
import { EpisodesAccordions } from '../components/Accordions/EpisodesAccordions';
import { useFetchData } from '../HOOKs/useFetchData';

export const Seasonpage = () => {
  const { id, seasonNum } = useParams();

  const pageDataUrl = `https://api.themoviedb.org/3/tv/${id}/season/${seasonNum}?api_key=${API_KEY}&language=en-US`;
  const videosListUrl = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`;
  
  const [pageData, isPageDataLoading] = useFetchData(pageDataUrl, null);
  const [videosData, isVideoListLoading] = useFetchData(videosListUrl, null);

  if (!isPageDataLoading || !isVideoListLoading) return <Loader />;
  const videosList = videosData.results;

  return (
    <Box sx={{ marginTop: 10 }}>
      <VideoTrailler
        data={videosList
          .filter((item) => item.type === 'Trailer' && item.official)
          .pop()}
      />
      <Container maxWidth='xl'>
        <Desciprion data={pageData} isSeason={true} />
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
    </Box>
  );
};
