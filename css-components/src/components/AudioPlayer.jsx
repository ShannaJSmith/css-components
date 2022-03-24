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

  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    // Pause and clean up
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  // Handle setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(src);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setPlaying(true);
      // startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  // TODO add playback progress bar and scrubbing

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
          playing={playing}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setPlaying}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
