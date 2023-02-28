import { useParams } from 'react-router-dom';
import { Desciprion } from '../components/Descriptions/Description';
import { HorizontalList } from '../components/HorizontalList/HorizontalList';
import { useEffect } from 'react';
import { useState } from 'react';
import { List } from '../components/List/List';
import { ListItem } from '../components/ListItem/ListItem';
import { VideoTrailler } from '../components/Video/YouTobeVideo';
import { AllVidoeClips } from '../components/Video/AllVidoeClips';
import { Reviews } from '../components/Rewievs/Reviews';
import { API_KEY } from '../data';
import axios from 'axios';

export const Singlepage = () => {
  const { id, content } = useParams();

  const [pageList, setPageList] = useState(null);
  const [videosList, setVideosList] = useState([]);
  const [similarList, setSimilarList] = useState([]);
  const [castList, setCastList] = useState([]);
  const [recommendations, setRecommendationsList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setPageList(res.data));
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setVideosList(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => setSimilarList(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}/credits?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setCastList(res.data.cast));
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((res) => setRecommendationsList(res.data.results));
  }, [id]);

  return (
    <div className='conteiner'>
      {videosList && (
        <VideoTrailler
          data={videosList
            .filter((item) => item.type === 'Trailer' && item.official)
            .pop()}
          className='trailer'
        />
      )}
      {pageList && <Desciprion data={pageList} />}
      {castList && (
        <HorizontalList data={castList} title='Cast'>
          {(data, listRef, className) => (
            <List className={className} data={data} listRef={listRef}>
              {(id, character, poster_path, name) => (
                <ListItem
                  key={id}
                  className={'horizontal-list-item'}
                  id={id}
                  img={poster_path}
                  name={name}
                  character={character}
                  categories={['person']}
                />
              )}
            </List>
          )}
        </HorizontalList>
      )}
      {videosList && <AllVidoeClips data={videosList} />}
      {recommendations && (
        <HorizontalList data={recommendations} title='Recommendations'>
          {(data, listRef, className) => (
            <List className={className} data={data} listRef={listRef}>
              {(id, title, poster_path) => (
                <ListItem
                  key={id}
                  className={'horizontal-list-item'}
                  id={id}
                  img={poster_path}
                  title={title}
                  categories={[content]}
                />
              )}
            </List>
          )}
        </HorizontalList>
      )}
      {similarList && (
        <HorizontalList data={similarList} title='Similar'>
          {(data, listRef, className) => (
            <List className={className} data={data} listRef={listRef}>
              {(id, title, poster_path) => (
                <ListItem
                  key={id}
                  className={'horizontal-list-item'}
                  id={id}
                  img={poster_path}
                  title={title}
                  categories={[content]}
                />
              )}
            </List>
          )}
        </HorizontalList>
      )}
      <Reviews id={id} content={content} />
    </div>
  );
};
