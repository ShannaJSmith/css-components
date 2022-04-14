import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Carousel = () => {
  return (
    <div>
      <Link to="/">
        <Button variant="success" style={{ marginBottom: '50px' }}>
          Home
        </Button>
      </Link>
      <ImageCarousel />
    </div>
  );
};

export default Carousel;
