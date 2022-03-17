import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './TableOfContents.css';

const TableOfContents = () => {
  return (
    <div className="TOC">
      <h1>Table of Contents </h1>
      <Link to="/background1">
        <Button variant="primary">Background 1</Button>
      </Link>
      <Link to="/background2">
        <Button variant="info">Background 2</Button>
      </Link>
    </div>
  );
};

export default TableOfContents;
