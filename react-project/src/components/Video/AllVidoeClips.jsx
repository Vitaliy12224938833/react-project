import { Slider } from '../Sliders/Slider';
import { VideoTrailler } from './YouTobeVideo';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';

export const AllVidoeClips = ({ data }) => {
  if (DataTransferItem && data.length !== 0)
    return (
      <Box>
        <Container maxWidth='xl'>
          <Typography variant='h4'>Clips</Typography>
        </Container>

        <Slider data={data}>
          {(item) => <VideoTrailler data={item} autoplay={0} />}
        </Slider>
      </Box>
    );
};
