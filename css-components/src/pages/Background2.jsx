import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Grid from '../components/Grid';
import Grid2 from '../components/Grid2';
import './Background2.css';

const Background2 = () => {
  return (
    <div className="background2">
      <Grid />
      <Grid2 />
      <br />
      <Link to="/">
        <Button variant="success">Home</Button>
      </Link>
    </div>
  );
};

export default Background2;
