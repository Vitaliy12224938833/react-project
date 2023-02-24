import { Slider } from '../Sliders/Slider';
import { VideoTrailler } from './YouTobeVideo';
export const AllVidoeClips = ({ data }) => {
  if (DataTransferItem)
    return (
      <div>
        <h4 className={'video-title'}>Clips</h4>
        <Slider data={data}>
          {(data, className) => (
            <VideoTrailler data={data} className={className} autoplay={0} />
          )}
        </Slider>
      </div>
    );
};
