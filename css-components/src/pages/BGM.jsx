import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SoundBoard from '../components/SoundBoard';

const BGM = () => {
  return (
    <div>
      <SoundBoard />
      <Link to="/">
        <Button variant="success">Home</Button>
      </Link>
    </div>
  );
};

export default BGM;
