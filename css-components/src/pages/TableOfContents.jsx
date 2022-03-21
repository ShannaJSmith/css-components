import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './TableOfContents.css';

const TableOfContents = () => {
  return (
    <div className="TOC">
      <h1>Table of Contents </h1>
      <Link to="/background1">
        <Button variant="primary" className="col-7">
          Background 1
        </Button>
      </Link>
      <Link to="/background2">
        <Button variant="info" className="col-7">
          Background 2
        </Button>
      </Link>
      <Link to="/cards">
        <Button variant="dark" className="col-7">
          Expanding Cards
        </Button>
      </Link>
    </div>
  );
};

export default TableOfContents;
