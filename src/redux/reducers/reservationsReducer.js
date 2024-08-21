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
      default:
        return state;
    }
  };
  
  export default reservationsReducer;
  