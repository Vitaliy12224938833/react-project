import { useState } from 'react';
import { classContext } from '../../Context/Context';
import './Slider.css';

export const Slider = ({ data, children }) => {
  if (!data) return;

  const [currIdx, setCurrIdx] = useState(0);

  const prevSlide = () => {
    currIdx >= 1 ? setCurrIdx(currIdx - 1) : setCurrIdx(data.length - 1);
  };

  const nextSlide = () => {
    currIdx < data.length - 1 ? setCurrIdx(currIdx + 1) : setCurrIdx(0);
  };

  const goToSlide = (idx) => setCurrIdx(idx);

  const isActiveDot = (idx) =>
    currIdx === idx ? 'dotStyle activeDot' : 'dotStyle';

  return (
    <div className='sliderStyles'>
      <button className='leftArrowStyles' onClick={() => prevSlide()}>
        ❰
      </button>
      <button className='rightArrowStyles' onClick={() => nextSlide()}>
        ❱
      </button>
      <classContext.Provider value='slideStyles'>
        {children(data[currIdx])}
      </classContext.Provider>
      <div className='dotsContainerStyles'>
        {data.map((item, idx) => (
          <div
            className={isActiveDot(idx)}
            key={idx}
            onClick={() => goToSlide(idx)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};
