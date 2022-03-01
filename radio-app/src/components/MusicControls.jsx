import React from "react";
import classes from "./MusicControls.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className={classes.audioControls}>
    <button
      type="button"
      className={classes.prev}
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <FontAwesomeIcon icon={faBackward} />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className={classes.pause}
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <FontAwesomeIcon icon={faPause} />
      </button>
    ) : (
      <button
        type="button"
        className={classes.play}
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <FontAwesomeIcon icon={faPlay} />
      </button>
    )}
    <button
      type="button"
      className={classes.next}
      aria-label="Next"
      onClick={onNextClick}
    >
      <FontAwesomeIcon icon={faForward} />
    </button>
  </div>
);

export default AudioControls;
