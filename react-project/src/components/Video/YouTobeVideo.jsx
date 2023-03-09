import YouTube from 'react-youtube';
import { Box } from '@mui/system';

export const VideoTrailler = ({ data, autoplay }) => {
  if (!data) return;
  const { key } = data;

  const opts = {
    width: '100%',
    height: '900px',
    playerVars: {
      autoplay: autoplay === 0 ? 0 : 1,
      fs: 1,
      iv_load_policy: 3,
      loop: 1,
      controls: 1,
      modestbranding: 1,
    },
  };

  return (
    <Box
      sx={{
        marginTop: '2rem',
        backgroundColor: 'black',
      }}
    >
      <YouTube videoId={key} opts={opts} />
    </Box>
  );
};
