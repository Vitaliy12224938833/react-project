import { Slider } from './Slider';
import { VideoTrailler } from './YouTobeVideo';

export const TrailersSlider = ({ data }) => {
  return (
    <>
      {data && (
        <Slider data={data.results.filter((item) => item.official)}>
          {(data, className) => (
            <VideoTrailler data={data} className={className} />
          )}
        </Slider>
      )}
    </>
  );
};
