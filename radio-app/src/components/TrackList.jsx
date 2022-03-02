import TrackItem from "./TrackItem";
import tracks from "../tracks";
import classes from "./TrackList.module.css";

function TrackList(props) {
  const allTracks = [
    {
      id: 0,
      title: "That Life",
      artist: "Unknown Mortal Orchestra",
      album: "That Life",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/02/Unknown-Mortal-Orchestra-That-Life.mp3",
    },
    {
      id: 1,
      title: "Hunnybee",
      artist: "Unknown Mortal Orchestra",
      album: "Sex & Food",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/02/Unknown-Mortal-Orchestra-Hunnybee-Official-Video.mp3",
    },
    {
      id: 2,
      title: "$orries",
      artist: "Peachy!",
      album: "Shiloh",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/02/orries.mp3",
    },
    {
      id: 3,
      title: "Seven Chimes",
      artist: "Pierce Murphy",
      album: "Through The Olive Branch",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/02/Pierce-Murphy-Seven-Chimes.mp3",
    },
    {
      id: 4,
      title: "Metaverse",
      artist: "Pierce Murphy",
      album: "This Joke Isn't Funny But It Goes Like This",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/02/Pierce-Murphy-Metaverse.mp3",
    },
    {
      id: 5,
      title: "Something In the Air",
      artist: "HoliznaCC0",
      album: "Lo-fi and Chill",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/02/HoliznaCC0-Something-In-the-Air.mp3",
    },
    {
      id: 6,
      title: "Pretty Little Lies",
      artist: "HoliznaCC0",
      album: "Lo-fi and Chill",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/02/HoliznaCC0-Pretty-Little-Lies.mp3",
    },
    {
      id: 7,
      title: "Home-bound Going Home Remix",
      artist: "Beats by Jai",
      album: "Going Home Remix v2",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/02/home-bound-v2-_-Going-Home-Bleach-OST-LoFi-Remix-_-prod.-Beats-by-Jai.mp3",
    },
    {
      id: 8,
      title: "Weather",
      artist: "Ginger Root",
      album: "Weather",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/03/Ginger-Root-Weather-Official-Music-Video.mp3",
    },
    {
      id: 9,
      title: "Loretta",
      artist: "Ginger Root",
      album: "City Slicker",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/03/Ginger-Root-Loretta-Official-Music-Video.mp3",
    },
    {
      id: 10,
      title: "Juban District",
      artist: "Ginger Root",
      album: "City Slicker",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/03/Ginger-Root-Juban-District-Official-Music-Video.mp3",
    },
    {
      id: 11,
      title: "Choke",
      artist: "I Dont Know How But They Found Me",
      album: "2010s Halloween",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/03/I-DONT-KNOW-HOW-BUT-THEY-FOUND-ME-Choke.mp3",
    },
    {
      id: 12,
      title: "Leave Me Alone",
      artist: "I Dont Know How But They Found Me",
      album: "Razzmatazz",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/03/I-DONT-KNOW-HOW-BUT-THEY-FOUND-ME-Leave-Me-Alone-Lyric-Video.mp3",
    },
    {
      id: 13,
      title: "Ný batterí",
      artist: "Sigur Rós",
      album: "Ágætis byrjun",
      audioSrc:
        "https://flowpow.one/flower_power/wp-content/uploads/2022/03/Ny-batteri.mp3",
    },
  ];

  const trackInfo = allTracks.map((track) => {
    console.log(track.id);
    return (
      <div key={track.id} className={classes.listItem}>
        <h2 className={classes.title}>{track.title}</h2>
        <div className={classes.seperator}></div>
        <h2 className={classes.artist}>{track.artist}</h2>
      </div>
    );
  });

  return <div className={classes.list}>{trackInfo}</div>;
}

export default TrackList;
