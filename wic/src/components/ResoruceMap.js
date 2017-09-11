import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

let map;

export default class ResoruceMap extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const geocode_options = {
      address: this.props.zipcode || '94010'
    }
    new window.google.maps.Geocoder().geocode(geocode_options, (results, status) => {
      if (/OK$/i.test(status)) {
        const mapOptions = {
          zoom: 13,
          center: results[0].geometry.location
        };
        map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  componentDidUpdate() {
    if (!map || !this.props.locations || !this.props.locations.length) return true;
    this.props.locations.forEach((location) => {
      if (!location.longitude || !location.latitude) return false;
      new window.google.maps.Marker({
        map: map,
        position: {lat: location.latitude, lng: location.longitude},
        draggable: false,
        animation: window.google.maps.Animation.DROP,
        // title: location.name,
        label: location.name
      });
    });
  }

  render() {
    return (
      <div>
        <div id="map" className="resource-map"></div>
      </div>
    );
  }
}
