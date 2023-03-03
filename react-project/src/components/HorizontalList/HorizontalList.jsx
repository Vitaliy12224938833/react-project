import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { API_KEY } from '../../data';
import { List } from '../List/List';
import { ItemClassNameContext } from '../../Context/Context';
import axios from 'axios';
import './HorizontalList.css';

export const HorizontalList = ({ id, mediaType, category, title }) => {
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
              <List
                className={'horizontal-list'}
                data={listData}
                listRef={listRef}
              ></List>
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
