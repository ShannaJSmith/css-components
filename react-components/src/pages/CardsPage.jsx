import React from 'react';
import ExpandingCards from '../components/ExpandingCards';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CardsPage = () => {
  return (
    <div>
      <h1>Anime Wallpaper</h1>
      <ExpandingCards />
      <Link to="/">
        <Button variant="success">Home</Button>
      </Link>
    </div>
  );
};

export default CardsPage;
