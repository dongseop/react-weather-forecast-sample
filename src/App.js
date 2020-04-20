import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import SearchBar from './components/SearchBar';
import WeatherList from './components/WeatherList';
import ErrorMsg from './components/ErrorMsg';

function App() {
  return (
    <Container className="App">
      <SearchBar/>
      <ErrorMsg/>
      <WeatherList/>
    </Container>
  );
}

export default App;
