import { Slider } from './Slider';
import { VideoTrailler } from './Video/YouTobeVideo';
export const TrailersSlider = ({ data }) => {
  return (
    <>
      {data && (
        <Slider data={data.filter((item) => (item.type = 'Trailer'))}>
          {(data, className) => (
            <VideoTrailler data={data} className={className} />
          )}
        </Slider>
      )}
    </>
  );
};
