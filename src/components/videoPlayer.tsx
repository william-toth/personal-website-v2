
import { useRef } from 'react';
import Demo from "../img/demo.mp4";

function VideoPlayer() {
  const videoRef = useRef(null);

  return (
    <div>
      <video ref={videoRef} width="500" height="360" controls>
        <source src={Demo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;