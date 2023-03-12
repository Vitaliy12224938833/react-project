import { useParams } from 'react-router-dom';
import { Desciprion } from '../components/Descriptions/Description';
import { HorizontalList } from '../components/HorizontalList/HorizontalList';
import { useEffect } from 'react';
import { useState } from 'react';
import { VideoTrailler } from '../components/Video/YouTobeVideo';
import { AllVidoeClips } from '../components/Video/AllVidoeClips';
import { API_KEY } from '../data';
import { MediaTypeForLinkContext } from '../Context/Context';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { Loader } from '../components/Loader/Loader';
import { EpisodesAccordions } from '../components/Accordions/EpisodesAccordions';
import axios from 'axios';

export const Seasonpage = () => {
  const { id, seasonNum } = useParams();
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
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setVideosList(res.data.results))
      .then(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/tv/${id}/season/${seasonNum}?api_key=${API_KEY}&language=en-US`
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
