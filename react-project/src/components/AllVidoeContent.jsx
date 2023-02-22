import { Slider } from './Slider';
import { VideoTrailler } from './Video/YouTobeVideo';
export const AllVidoeContent = ({ data }) => {
  if (DataTransferItem)
    return (
      <div>
        <h4 className={'title'}>Clips</h4>
        <Slider data={data}>
          {(data, className) => (
            <VideoTrailler data={data} className={className} autoplay={0} />
          )}
        </Slider>
      </div>
    );
};
