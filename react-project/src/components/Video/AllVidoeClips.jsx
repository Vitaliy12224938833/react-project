import { Container } from '@mui/material';
import { ComponentWrapper } from '../Wrappers/ComponentWrapper';
import { Slider } from '../Sliders/Slider';
import { VideoPlayer } from './VideoPlayer';
import { BasicTitle } from '../common/BasicTitle';
import React from 'react';
const AllVidoeClips = React.memo(({ data }) => {
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
});

export default AllVidoeClips;
