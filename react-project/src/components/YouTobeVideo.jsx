import YouTube from 'react-youtube';
import '../styles/Slider.css';

export const Video = ({ data, className }) => {
  const { key } = data;
  const opts = {
    playerVars: {
      autoplay: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      modestbranding: 1,
    },
  };
  return <YouTube iframeClassName={className} videoId={key} opts={opts} />;
};
