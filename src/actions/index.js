import axios from 'axios';

const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "02c9a404fd0942e095fa2fff364c0b2b";

export function addCity(name) {
  return (dispatch) => {
    dispatch({ type: 'START_LOADING' });
    dispatch({ type: 'CLEAR_ERRORS' });
    axios.get(API_URL, {params: {
      q: name, 
      appid: API_KEY,
      units: 'metric'
    }}).then(({data}) => {
      dispatch({
        type: 'ADD_CITY', 
        payload: data
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: error.response.data
      });
    }).then(() => {
      dispatch( {type: 'END_LOADING'});
    });
  };
}

