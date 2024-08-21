const initialState = {
  reservations: [],
  loading: false,
  error: null,
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RESERVATIONS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_RESERVATIONS_SUCCESS':
      return {
        ...state,
        loading: false,
        reservations: action.payload,
      };
    case 'FETCH_RESERVATIONS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ADD_RESERVATION_SUCCESS':
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case 'DELETE_RESERVATION_SUCCESS':
      return {
        ...state,
        reservations: state.reservations.filter(reservation => reservation.id !== action.payload),
      };
    case 'UPDATE_RESERVATION_SUCCESS':
      return {
        ...state,
        reservations: state.reservations.map(reservation =>
          reservation.id === action.payload.id ? action.payload : reservation
        ),
      };
    case 'ADD_RESERVATION_FAILURE':
    case 'DELETE_RESERVATION_FAILURE':
    case 'UPDATE_RESERVATION_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reservationsReducer;
