import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import '../styles/EditReservationForm.css';

const EditReservationForm = ({ show, handleClose, reservation }) => {
  const [customer, setCustomer] = useState(reservation.customer || '');
  const [service, setService] = useState(reservation.service || '');
  const [date, setDate] = useState(reservation.date || '');
  const [time, setTime] = useState(reservation.time || '');
  const [status, setStatus] = useState(reservation.status || 'confirmed');

  const dispatch = useDispatch();

  useEffect(() => {
    setCustomer(reservation.customer);
    setService(reservation.service);
    setDate(reservation.date);
    setTime(reservation.time);
    setStatus(reservation.status);
  }, [reservation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedReservation = { ...reservation, customer, service, date, time, status };
    dispatch({ type: 'UPDATE_RESERVATION_REQUEST', payload: updatedReservation });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} className="edit-reservation-modal">
      <Modal.Header closeButton>
        <Modal.Title>Edit Reservation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
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

          <Form.Group controlId="status" className="mt-3">
            <Form.Label>Status</Form.Label>
            <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditReservationForm;
