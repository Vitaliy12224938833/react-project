import { Slider } from '../Sliders/Slider';
import { VideoTrailler } from './YouTobeVideo';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export const AllVidoeClips = ({ data }) => {
  if (DataTransferItem)
    return (
      <Box>
        <Typography variant='h4'>Clips</Typography>
        <Slider data={data}>
          {(item) => <VideoTrailler data={item} autoplay={0} />}
        </Slider>
      </Box>
    );
};
