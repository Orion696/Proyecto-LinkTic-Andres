import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import AddReservationForm from '../components/AddReservationForm';
import EditReservationForm from '../components/EditReservationForm';

const ReservationsPage = () => {
  const dispatch = useDispatch();
  const { reservations, loading, error } = useSelector(state => state.reservations);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

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

  return (
    <div className="container mt-5">
      <h1>Reservations</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <Table striped bordered hover>
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
              <td>
                <Button variant="warning" className="me-2" onClick={() => handleEdit(reservation)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(reservation.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddReservationForm />
      {selectedReservation && (
        <EditReservationForm
          show={showEditModal}
          handleClose={handleCloseEditModal}
          reservation={selectedReservation}
        />
      )}
    </div>
  );
};

export default ReservationsPage;
