import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

let geocoder;
let map;

function codeAddress(address) {
  geocoder.geocode( { 'address': '455 County Center, Redwood City, CA 94063'}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      var marker = new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

const style = {
  padding: '20px',
  width: '100%',
  height: '600px',
  border: '1px solid red'
}

export default class Gmap extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    geocoder = new window.google.maps.Geocoder();
    // const latlng = new window.google.maps.LatLng(-35.397, 150.644);
    const mapOptions = {
      zoom: 12,
      // center: latlng
    }
    map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
    codeAddress('');
  }

  render() {
    console.log('gmap.js:40');
    return (
      <div>
        <div id="map" style={style}></div>
      </div>
    );
  }
}
