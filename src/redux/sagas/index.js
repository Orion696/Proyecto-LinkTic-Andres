import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchReservations() {
  try {
    const response = yield call(axios.get, 'http://localhost:5001/reservations');
    yield put({ type: 'FETCH_RESERVATIONS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_RESERVATIONS_FAILURE', payload: error.message });
  }
}

function* watchFetchReservations() {
  yield takeEvery('FETCH_RESERVATIONS_REQUEST', fetchReservations);
}

export default function* rootSaga() {
  yield all([
    watchFetchReservations(),
  ]);
}
