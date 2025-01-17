/* global google */
import React from 'react';
import styled from 'styled-components';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const StyledDiv = styled.div`
  width: 250px;
  height: 150px;
`;
export default class WeatherItem extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.data && this.props.data.city) {
      const city = this.props.data.city;
      new google.maps.Map(this.mapRef.current, {
        center: { lat: city.coord.lat, lng: city.coord.lon },
        zoom: 10,
        disableDefaultUI: true
      });
    }
  }

  render() {
    const { city, list } = this.props.data;
    const name = city.name;
    const { temp } = list[0].main;
    const temps = list.map(v => v.main.temp);
    return (
      <tr>
        <td><StyledDiv ref={this.mapRef} ></StyledDiv></td>
        <td>{name}</td>
        <td>{temp}</td>
        <td>
          <Sparklines data={temps} width={300} height={150} svgHeight={150} svgWidth={300}>
            <SparklinesLine color="blue" />
            <SparklinesReferenceLine type='mean' />
          </Sparklines>
        </td>
      </tr>
    );
  }
}


