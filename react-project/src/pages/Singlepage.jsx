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
  const { id, mediaType } = useParams();
  console.log(useParams());
  const [pageList, setPageList] = useState(null);
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setPageList(res.data));
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setVideosList(res.data.results));
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
      <HorizontalList
        id={id}
        mediaType={mediaType}
        category={'credits'}
        title='Cast'
      >
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
                mediaType={'person'}
              />
            )}
          </List>
        )}
      </HorizontalList>
      {videosList && <AllVidoeClips data={videosList} />}
      <HorizontalList
        id={id}
        mediaType={mediaType}
        category={'recommendations'}
        title='Recommendations'
      >
        {(data, listRef, className) => (
          <List className={className} data={data} listRef={listRef}>
            {(id, title, poster_path) => (
              <ListItem
                key={id}
                className={'horizontal-list-item'}
                id={id}
                img={poster_path}
                title={title}
                mediaType={mediaType}
              />
            )}
          </List>
        )}
      </HorizontalList>
      <HorizontalList
        id={id}
        mediaType={mediaType}
        category={'similar'}
        title='Similar'
      >
        {(data, listRef, className) => (
          <List className={className} data={data} listRef={listRef}>
            {(id, title, poster_path) => (
              <ListItem
                key={id}
                className={'horizontal-list-item'}
                id={id}
                img={poster_path}
                title={title}
                mediaType={mediaType}
              />
            )}
          </List>
        )}
      </HorizontalList>
      <Reviews id={id} mediaType={mediaType} />
    </div>
  );
};
