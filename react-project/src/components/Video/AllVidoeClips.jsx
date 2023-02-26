import { Slider } from '../Sliders/Slider';
import { VideoTrailler } from './YouTobeVideo';

export const AllVidoeClips = ({ data, className }) => {
  if (DataTransferItem)
    return (
      <div>
        <h4 className={'video-title'}>Clips</h4>
        <Slider data={data}>
          {(data) => (
            <VideoTrailler data={data} className={className} autoplay={0} />
          )}
        </Slider>
      </div>
    );
};
