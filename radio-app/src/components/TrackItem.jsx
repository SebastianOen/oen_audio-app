import React from "react";

function TrackItem(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.artist}</h2>
    </div>
  );
}

export default TrackItem;
