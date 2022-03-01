import AudioPlayer from "../components/MusicPlayer";
import tracks from "../tracks";

function MusicPlayerPage(props) {
  return (
    <div>
      <AudioPlayer tracks={tracks} />
    </div>
  );
}

export default MusicPlayerPage;
