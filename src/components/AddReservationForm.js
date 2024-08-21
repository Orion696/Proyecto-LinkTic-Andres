import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Row, Col } from 'react-bootstrap';
import '../styles/AddReservationForm.css';

const AddReservationForm = () => {
  const [customer, setCustomer] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [status, setStatus] = useState('confirmed');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = { customer, service, date, time, status };
    dispatch({ type: 'ADD_RESERVATION_REQUEST', payload: newReservation });
    setCustomer('');
    setService('');
    setDate('');
    setTime('');
  };

  return (
    <div className="add-reservation-form-container">
      <h2 className="add-reservation-title">Add New Reservation</h2>
      <Form onSubmit={handleSubmit} className="add-reservation-form">
        <Row>
          <Col md={6}>
            <Form.Group controlId="customer">
              <Form.Label>Customer</Form.Label>
              <Form.Control
                type="text"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="service">
              <Form.Label>Service</Form.Label>
              <Form.Control
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={6}>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="time">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={12}>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <Button type="submit" className="add-reservation-button">
              Add Reservation
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddReservationForm;
