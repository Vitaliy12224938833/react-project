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
        content={content}
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
                categories={['person']}
              />
            )}
          </List>
        )}
      </HorizontalList>
      {videosList && <AllVidoeClips data={videosList} />}
      <HorizontalList
        id={id}
        content={content}
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
                categories={[content]}
              />
            )}
          </List>
        )}
      </HorizontalList>
      <HorizontalList
        id={id}
        content={content}
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
                categories={[content]}
              />
            )}
          </List>
        )}
      </HorizontalList>
      <Reviews id={id} content={content} />
    </div>
  );
};
