import {useState, useEffect, useRef} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface componentProps {
  videoJsOptions: videojs.PlayerOptions;
}

const VideoJsPlayer = ({videoJsOptions}: componentProps) => {
  const [player, setPlayer] = useState<any>(null);

  const videoNode = useRef(null);

  useEffect(() => {
    if (videoNode.current) {
      const videojs_player = videojs(videoNode.current, videoJsOptions);
      setPlayer(videojs_player);

      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, []);

  return (
    <div data-vjs-player className="video-player-container">
      <video ref={videoNode} className="video-js"></video>
    </div>
  );
};

export default VideoJsPlayer;
