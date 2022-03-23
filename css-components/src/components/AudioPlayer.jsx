import './AudioPlayer.css';
import { useState, useEffect, useRef } from 'react';

const AudioPlayer = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [playing, setPlaying] = useState(false);

  const { src, label } = tracks[trackIndex];

  const audioRef = useRef(new Audio(src));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const toPrevTrack = () => {
    console.log('go to prev');
  };

  const toNextTrack = () => {
    console.log('go to next');
  };

  return (
    <div className="audio-player" style={{ marginTop: '100px' }}>
      <div className="track-info">
        {/* <img
          className="artwork"
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        /> */}
        <h2 className="title">{label}</h2>
        {/* <h3 className="artist">{artist}</h3> */}
      </div>
    </div>
  );
};

export default AudioPlayer;
