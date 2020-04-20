import produce from 'immer';

const initialState = {
  cities: [
    {
      id: 1, city: 'Seoul',
      temp: 10.24,
      pressure: 1012,
      humidity: 73,
    },
    {
      id: 2, city: 'Tokyo',
      temp: 10.24,
      pressure: 1012,
      humidity: 73,
    },
    {
      id: 3, city: 'N.Y.',
      temp: 10.24,
      pressure: 1012,
      humidity: 73,
    }
  ]
};
const reducer = produce((state, action) => {
  switch(action.type) {
    case 'ADD_CITY':
      state.cities.push(action.payload);
      break;
    default: 
      break;
  }
}, initialState);

export default reducer;