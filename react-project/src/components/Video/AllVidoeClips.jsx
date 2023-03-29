import { Container } from '@mui/material';
import { ComponentWrapper } from '../Wrappers/ComponentWrapper';
import { Slider } from '../Sliders/Slider';
import { VideoTrailer } from './VideoTrailler';
import { BasicTitle } from '../common/BasicTitle';
export const AllVidoeClips = ({ data }) => {
  if (DataTransferItem && data.length !== 0)
    return (
      <ComponentWrapper>
        <Container maxWidth='xl'>
          <BasicTitle>Clips</BasicTitle>
        </Container>
        <Slider data={data}>
          {(item) => <VideoTrailer data={item} autoplay={0} />}
        </Slider>
      </ComponentWrapper>
    );
};
