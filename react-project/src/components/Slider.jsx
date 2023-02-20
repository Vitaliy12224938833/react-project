import { useState } from 'react';
import { Video } from './YouTobeVideo';
import '.././styles/Slider.css';

export const Slider = ({ data }) => {
  const traillerList = data.filter((item) => item.type === 'Trailer');
  const [currIdx, setCurrIdx] = useState(0);

  const prevSlide = () => {
    currIdx >= 1
      ? setCurrIdx(currIdx - 1)
      : setCurrIdx(traillerList.length - 1);
  };

  const nextSlide = () => {
    currIdx < traillerList.length - 1 ? setCurrIdx(currIdx + 1) : setCurrIdx(0);
  };

  const goToSlide = (idx) => setCurrIdx(idx);

  const isActiveDot = (idx) =>
    currIdx === idx ? 'dotStyle activeDot' : 'dotStyle';

  return (
    <div className='sliderStyles'>
      <div className='leftArrowStyles' onClick={() => prevSlide()}>
        ❰
      </div>
      <div className='rightArrowStyles' onClick={() => nextSlide()}>
        ❱
      </div>
      <div className='slideStyles'>
        <Video className={'slideStyles'} data={traillerList[currIdx]} />
      </div>
      <div className='dotsContainerStyles'>
        {traillerList.map((item, idx) => (
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
