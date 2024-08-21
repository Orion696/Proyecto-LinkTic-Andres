import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';

function* fetchReservations() {
  try {
    const response = yield call(axios.get, 'http://localhost:5001/reservations');
    yield put({ type: 'FETCH_RESERVATIONS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_RESERVATIONS_FAILURE', payload: error.message });
    toast.error('Failed to fetch reservations.');
  }
}

function* addReservation(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:5001/reservations', action.payload);
    yield put({ type: 'ADD_RESERVATION_SUCCESS', payload: response.data });
    toast.success('Reservation added successfully.');
  } catch (error) {
    yield put({ type: 'ADD_RESERVATION_FAILURE', payload: error.message });
    toast.error('Failed to add reservation.');
  }
}

function* deleteReservation(action) {
  try {
    yield call(axios.delete, `http://localhost:5001/reservations/${action.payload}`);
    yield put({ type: 'DELETE_RESERVATION_SUCCESS', payload: action.payload });
    toast.success('Reservation deleted successfully.');
  } catch (error) {
    yield put({ type: 'DELETE_RESERVATION_FAILURE', payload: error.message });
    toast.error('Failed to delete reservation.');
  }
}

function* updateReservation(action) {
  try {
    const response = yield call(axios.put, `http://localhost:5001/reservations/${action.payload.id}`, action.payload);
    yield put({ type: 'UPDATE_RESERVATION_SUCCESS', payload: response.data });
    toast.success('Reservation updated successfully.');
  } catch (error) {
    yield put({ type: 'UPDATE_RESERVATION_FAILURE', payload: error.message });
    toast.error('Failed to update reservation.');
  }
}

function* watchFetchReservations() {
  yield takeEvery('FETCH_RESERVATIONS_REQUEST', fetchReservations);
}

function* watchAddReservation() {
  yield takeEvery('ADD_RESERVATION_REQUEST', addReservation);
}

function* watchDeleteReservation() {
  yield takeEvery('DELETE_RESERVATION_REQUEST', deleteReservation);
}

function* watchUpdateReservation() {
  yield takeEvery('UPDATE_RESERVATION_REQUEST', updateReservation);
}

export default function* rootSaga() {
  yield all([
    watchFetchReservations(),
    watchAddReservation(),
    watchDeleteReservation(),
    watchUpdateReservation(),
  ]);
}
