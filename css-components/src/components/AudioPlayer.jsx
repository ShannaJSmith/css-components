import './AudioPlayer.css';
import { useState, useEffect, useRef } from 'react';

const AudioPlayer = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [playing, setPlaying] = useState(false);

  const { src, label, anime, artwork } = tracks[trackIndex];

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
      {tracks.map((track, index) => (
        <div className="track-info" key={index}>
          <img
            className="artwork"
            src={track.artwork}
            alt={`track artwork for ${track.label} from ${track.anime}`}
          />
          <h2 className="title">{track.label}</h2>
          <h3 className="anime">{track.anime}</h3>
        </div>
      ))}
    </div>
  );
};

export default AudioPlayer;
