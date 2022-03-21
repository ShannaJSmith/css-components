import React from 'react';
import ExpandingCards from '../components/ExpandingCards';
import './CardsPage.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CardsPage = () => {
  return (
    <div className="card-page">
      <h1>Anime Wallpaper</h1>
      <ExpandingCards />
      <Link to="/">
        <Button variant="success">Home</Button>
      </Link>
    </div>
  );
};

export default CardsPage;
