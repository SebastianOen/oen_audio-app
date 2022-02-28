import { useRef } from "react";
import AudioControls from "./AudioControls";
import AudioDetails from "./AudioDetails";

function AudioPlayer(props) {
  const audioElement = useRef();

  return (
    <div>
      <div>
        <AudioDetails />
        <AudioControls />
      </div>
    </div>
  );
}

export default AudioPlayer;
