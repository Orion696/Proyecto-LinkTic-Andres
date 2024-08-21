import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to the Reservation System</h1>
      <p className="homepage-description">Manage your reservations efficiently.</p>
      <Link to="/reservations">
        <Button className="homepage-button" variant="info">Go to Reservations</Button>
      </Link>
    </div>
  );
};

export default HomePage;
