import { circIn } from 'framer-motion';
import { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';

import './Slider.css';

export const Slider = ({ data, children }) => {
  if (!data) return;

  //   const variants = {
  //     initial: (direction) => {
  //       return {
  //         x: direction > 0 ? 1000 : -1000,
  //         opacity: 0,
  //         scale: 0.5,
  //       };
  //     },
  //     animate: {
  //       x: 0,
  //       opacity: 1,
  //       scale: 1,
  //       // transition: 'ease-in',
  //       transition: {
  //         x: { type: 'spring', stiffness: 300, damping: 30 },
  //         opacity: { duration: 0.2 },
  //       },
  //     },
  //     exit: (direction) => {
  //       return {
  //         x: direction > 0 ? -1000 : 1000,
  //         opacity: 0,
  //         scale: 0.5,
  //         // transition: 'ease-in',
  //         transition: {
  //           x: { type: 'spring', stiffness: 300, damping: 30 },
  //           opacity: { duration: 0.2 },
  //         },
  //       };
  //     },
  //   };
  //   const [direction, setDirection] = useState(0);
  const [currIdx, setCurrIdx] = useState(0);

  const prevSlide = () => {
    // setDirection(-1);
    currIdx >= 1 ? setCurrIdx(currIdx - 1) : setCurrIdx(data.length - 1);
  };

  const nextSlide = () => {
    // setDirection(1);
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
      {/* <AnimatePresence initial={false} custom={direction}> */}
      {children(
        data[currIdx],
        'slideStyles'
        //   variants,
        //   'initial',
        //   'animate',
        //   'exit',
        //   direction
      )}
      {/* </AnimatePresence> */}

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
