import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

import WeatherItem from './WeatherItem';

export default function WeatherList() {
  const cities = useSelector(state => state.cities)
  return (
    <Table bordered hover variant="dark">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>Pressure</th>
        </tr>
      </thead>
      <tbody>
        { cities.map(item => (<WeatherItem data={item}/>))}
      </tbody>
    </Table>
  );
}