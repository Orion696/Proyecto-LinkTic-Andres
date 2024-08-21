import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome to the Reservation System</h1>
      <p>Manage your reservations efficiently.</p>
      <Link to="/reservations">
        <Button variant="primary">Go to Reservations</Button>
      </Link>
    </div>
  );
};

export default HomePage;
