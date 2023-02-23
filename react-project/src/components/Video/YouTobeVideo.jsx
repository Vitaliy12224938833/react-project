import YouTube from 'react-youtube';
import './Video.css';

export const VideoTrailler = ({ data, className, autoplay }) => {
  if (!data) return;
  const { key } = data;
  const opts = {
    playerVars: {
      autoplay: autoplay === 0 ? 0 : 1,
      fs: 1,
      iv_load_policy: 3,
      loop: 1,
      controls: 1,
      modestbranding: 1,
    },
  };
  return <YouTube iframeClassName={className} videoId={key} opts={opts} />;
};
