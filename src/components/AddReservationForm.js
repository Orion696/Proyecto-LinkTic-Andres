import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

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
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group controlId="customer">
        <Form.Label>Customer</Form.Label>
        <Form.Control
          type="text"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="service" className="mt-3">
        <Form.Label>Service</Form.Label>
        <Form.Control
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="date" className="mt-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="time" className="mt-3">
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="status" className="mt-3">
        <Form.Label>Status</Form.Label>
        <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-4">
        Add Reservation
      </Button>
    </Form>
  );
};

export default AddReservationForm;
