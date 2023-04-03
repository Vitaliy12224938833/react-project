import { TrailerWrapper } from '../Wrappers/TrailerWrapper';
import { VideoPlayer } from './VideoPlayer';

export const Trailer = ({ list }) => (
  <TrailerWrapper>
    <VideoPlayer
      data={list
        .filter((item) => item.type === 'Trailer' && item.official)
        .pop()}
      autoplay={1}
    ></VideoPlayer>
  </TrailerWrapper>
);
