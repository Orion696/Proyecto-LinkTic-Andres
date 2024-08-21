import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Container, Row, Col, Card } from 'react-bootstrap';
import AddReservationForm from '../components/AddReservationForm';
import EditReservationForm from '../components/EditReservationForm';
import '../styles/ReservationsPage.css';

const ReservationsPage = () => {
  const dispatch = useDispatch();
  const { reservations, loading, error } = useSelector(state => state.reservations);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    dispatch({ type: 'FETCH_RESERVATIONS_REQUEST' });
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_RESERVATION_REQUEST', payload: id });
  };

  const handleEdit = (reservation) => {
    setSelectedReservation(reservation);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => setShowEditModal(false);

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <Container className="reservations-container">
      <Row className="mb-4">
        <Col>
          <h1 className="reservations-title text-center">Reservations</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <Card className="card-custom">
            <Card.Body className="card-body-custom">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Customer</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation, index) => (
                    <tr key={reservation.id}>
                      <td>{index + 1}</td>
                      <td>{reservation.customer}</td>
                      <td>{reservation.service}</td>
                      <td>{reservation.date}</td>
                      <td>{reservation.time}</td>
                      <td>{reservation.status}</td>
                      <td className="action-buttons">
                        <Button variant="warning" className="action-button me-2" onClick={() => handleEdit(reservation)}>
                          Edit
                        </Button>
                        <Button variant="danger" className="action-button" onClick={() => handleDelete(reservation.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
        <Button className="add-reservation-button" onClick={toggleAddForm}>
  {showAddForm ? 'Hide Form' : 'Add New Reservation'}
</Button>

        </Col>
      </Row>
      {showAddForm && (
        <Row className="mt-4">
          <Col>
            <Card className="card-custom">
              <Card.Body className="card-body-custom">
                <AddReservationForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      {selectedReservation && (
        <EditReservationForm
          show={showEditModal}
          handleClose={handleCloseEditModal}
          reservation={selectedReservation}
        />
      )}
    </Container>
  );
};

export default ReservationsPage;
