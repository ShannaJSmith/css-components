import './AudioPlayer.css';
import AudioControls from './AudioControls';
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
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  return (
    <div className="audio-player" style={{ marginTop: '100px' }}>
      <div className="track-info">
        <img
          className="artwork"
          src={artwork}
          alt={`track artwork for ${label} from ${anime}`}
        />
        <h3 className="title">{label}</h3>
        <h4 className="anime">{anime}</h4>
        <AudioControls
          isPlaying={playing}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setPlaying}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
