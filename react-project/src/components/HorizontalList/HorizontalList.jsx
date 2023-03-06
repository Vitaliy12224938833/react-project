import { useEffect, useState, useContext } from 'react';
import { useRef } from 'react';
import { API_KEY } from '../../data';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import { ItemClassNameContext } from '../../Context/Context';
import { Link } from 'react-router-dom';
import { MediaTypeForLinkContext } from '../../Context/Context';
import axios from 'axios';
import './HorizontalList.css';

export const HorizontalList = ({ id, mediaType, category, title }) => {
  const linkMediaType = useContext(MediaTypeForLinkContext);
  const [listData, setListData] = useState([]);
  const listRef = useRef();

  let scrollAmount = 0;
  let scrollParClick = 1000;

  const handleClickLeft = () => {
    listRef.current.scrollTo({
      to: 0,
      left: (scrollAmount -= scrollParClick),
    });
    if (scrollAmount < 0) scrollAmount = 0;
  };

  const handleClickRight = () => {
    if (
      scrollAmount <=
      listRef.current.scrollWidth - listRef.current.clientWidth
    ) {
      listRef.current.scrollTo({
        to: 0,
        left: (scrollAmount += scrollParClick),
      });
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}/${category}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setListData(res.data.cast || res.data.results));
  }, [id]);

  return (
    <>
      {listData.length > 0 && (
        <>
          <h3 className='title'>{title}</h3>
          <div className='horizontal-list-wrap'>
            <button
              className='scroll-list-button left'
              onClick={handleClickLeft}
            >
              ❰
            </button>
            <ItemClassNameContext.Provider value='horizontal-list-item'>
              <ImageList>
                {listData.map((item) => {
                  const { id, title, poster_path, name, profile_path } = item;
                  if (poster_path || profile_path)
                    return (
                      <ImageListItem sx={{ width: 200, height: 300 }}>
                        <Link to={`/${linkMediaType}/${name || title}/${id}`}>
                          <img
                            className='list-item-img'
                            src={`https://image.tmdb.org/t/p/w200${
                              poster_path || profile_path
                            }`}
                            alt={name || title}
                            loading='lazy'
                          />
                        </Link>
                      </ImageListItem>
                    );
                })}
              </ImageList>
            </ItemClassNameContext.Provider>
            <button
              className='scroll-list-button right'
              onClick={handleClickRight}
            >
              ❱
            </button>
          </div>
        </>
      )}
    </>
  );
};
