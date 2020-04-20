import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

import WeatherItem from './WeatherItem';

export default function WeatherList() {
  const cities = useSelector(state => state.cities)
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>City</th>
          <th>온도</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { cities.map(item => (<WeatherItem key={item.city.id} data={item}/>))}
      </tbody>
    </Table>
  );
}