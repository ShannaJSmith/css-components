import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SoundBoard from '../components/SoundBoard';
import AudioPlayer from '../components/AudioPlayer';

const BGM = () => {
  return (
    <div>
      <Link to="/">
        <Button variant="success" style={{ marginBottom: '50px' }}>
          Home
        </Button>
      </Link>
      <SoundBoard />
      <AudioPlayer />
    </div>
  );
};

export default BGM;
