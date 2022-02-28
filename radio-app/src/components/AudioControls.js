import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import style from "./AudioControls_module.css";

function AudioControls(props) {
  return (
    <div>
      <button
        className={style.skipButton}
        onClick={() => props.skipTrack(false)}
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className={style.playButton}
        onClick={() => props.setPlaying(!props.playing)}
      >
        <FontAwesomeIcon icon={props.playing ? faPause : faPlay} />
      </button>
      <button className={style.skipButton} onClick={() => props.skipTrack()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default AudioControls;
