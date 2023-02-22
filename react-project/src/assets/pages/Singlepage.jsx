import { useParams } from 'react-router-dom';
import { TrailersSlider } from '../../components/TrailersSlider';
import { Desciprion } from '../../components/Description';
import { HorizontalList } from '../../components/HorizontalList/HorizontalList';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export const Singlepage = () => {
  const { id, content, category } = useParams();

  const [pageData, setPageData] = useState(null);
  const [videosData, setVideoData] = useState(null);
  const [similarData, setSimilarData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}?api_key=1f63914a91cb95d33f7d8d413f4c28ca&language=en-US`
      )
      .then((res) => setPageData(res.data));
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}/videos?api_key=1f63914a91cb95d33f7d8d413f4c28ca&language=en-US`
      )
      .then((res) => setVideoData(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}/similar?api_key=1f63914a91cb95d33f7d8d413f4c28ca&language=en-US&page=1`
      )
      .then((res) => setSimilarData(res.data.results));
  }, [id]);

  return (
    <div className='conteiner'>
      {videosData && <TrailersSlider data={videosData} />}
      {pageData && <Desciprion data={pageData} />}
      {similarData && (
        <HorizontalList
          data={similarData}
          title='Similar'
          content={content}
          category={category}
        />
      )}
    </div>
  );
};
