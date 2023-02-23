import { useParams } from 'react-router-dom';
import { TrailersSlider } from '../../components/TrailersSlider';
import { Desciprion } from '../../components/Description';
import { HorizontalList } from '../../components/HorizontalList/HorizontalList';
import { useEffect } from 'react';
import { useState } from 'react';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/ListItem/ListItem';
import { VideoTrailler } from '../../components/Video/YouTobeVideo';
import axios from 'axios';

export const Singlepage = () => {
  const { id, content, category } = useParams();

  const [pageList, setPageList] = useState(null);
  const [videosList, setVideosList] = useState(null);
  const [similarList, setSimilarList] = useState(null);
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}?api_key=1f63914a91cb95d33f7d8d413f4c28ca&language=en-US`
      )
      .then((res) => setPageList(res.data));
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}/videos?api_key=1f63914a91cb95d33f7d8d413f4c28ca&language=en-US`
      )
      .then((res) => setVideosList(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}/similar?api_key=1f63914a91cb95d33f7d8d413f4c28ca&language=en-US&page=1`
      )
      .then((res) => setSimilarList(res.data.results));
    axios
      .get(
        `https://api.themoviedb.org/3/${content}/${id}/credits?api_key=1f63914a91cb95d33f7d8d413f4c28ca&language=en-US`
      )
      .then((res) => setCastList(res.data.cast));
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
      {similarList && (
        <HorizontalList data={similarList} title='Similar'>
          {(data, listRef, className) => (
            <List className={className} data={data} listRef={listRef}>
              {(id, title, poster_path, name) => (
                <ListItem
                  key={id}
                  className={'horizontal-list-item'}
                  id={id}
                  img={poster_path}
                  name={title || name}
                  categories={[content, category]}
                />
              )}
            </List>
          )}
        </HorizontalList>
      )}
      {castList && (
        <HorizontalList data={castList} title='Cast'>
          {(data, listRef, className) => (
            <List className={className} data={data} listRef={listRef}>
              {(id, title, poster_path, name) => (
                <ListItem
                  key={id}
                  className={'horizontal-list-item'}
                  id={id}
                  img={poster_path}
                  name={title || name}
                  categories={['person', category]}
                />
              )}
            </List>
          )}
        </HorizontalList>
      )}
    </div>
  );
};
