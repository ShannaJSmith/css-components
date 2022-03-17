import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Background2.css';

const Background2 = () => {
  return (
    <div className="background2">
      Background2
      <Link to="/">
        <Button variant="primary">Home</Button>
      </Link>
    </div>
  );
};

export default Background2;
