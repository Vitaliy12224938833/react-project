import { useRef } from 'react';
import './HorizontalList.css';

export const HorizontalList = ({ data, title, children }) => {
  const listRef = useRef();

  const filtredData = data.filter(
    (item) => item.poster_path || item.profile_path
  );

  let scrollAmount = 0;
  let scrollParClick = 1000;

  const handleClickLeft = () => {
    listRef.current.scrollTo({
      to: 0,
      left: (scrollAmount -= scrollParClick),
    });
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
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
  return (
    <>
      {filtredData.length > 0 && (
        <div className='horizontal-list-conteiner'>
          <h3 className='title'>{title}</h3>
          <div className='horizontal-list-wrap'>
            <button
              className='scroll-list-button left'
              onClick={() => handleClickLeft()}
            >
              ❰
            </button>
            {children(filtredData, listRef, 'horizontal-list')}
            <button
              className='scroll-list-button right'
              onClick={() => handleClickRight()}
            >
              ❱
            </button>
          </div>
        </div>
      )}
    </>
  );
};
