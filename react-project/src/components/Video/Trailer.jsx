import React from 'react';
import { TrailerWrapper } from '../Wrappers/TrailerWrapper';
import { VideoPlayer } from './VideoPlayer';

const Trailer = React.memo(({ list }) => (
  <TrailerWrapper>
    <VideoPlayer
      data={list
        .filter((item) => item.type === 'Trailer' && item.official)
        .pop()}
      autoplay={1}
    ></VideoPlayer>
  </TrailerWrapper>
));

export default Trailer;
