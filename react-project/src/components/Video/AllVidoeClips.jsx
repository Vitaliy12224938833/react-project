import { Container } from '@mui/material';
import { ComponentWrapper } from '../Wrappers/ComponentWrapper';
import { Slider } from '../Sliders/Slider';
import { VideoPlayer } from './VideoPlayer';
import { BasicTitle } from '../common/BasicTitle';
export const AllVidoeClips = ({ data }) => {
  if (DataTransferItem && data.length !== 0)
    return (
      <ComponentWrapper>
        <Container maxWidth='xl'>
          <BasicTitle>Clips</BasicTitle>
        </Container>
        <Slider data={data}>
          {(item) => <VideoPlayer data={item} autoplay={false} />}
        </Slider>
      </ComponentWrapper>
    );
};
