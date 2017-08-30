import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';

import shouldPureComponentUpdate from 'react';

import Gmap from './Gmap';

import ResourceTable from './ResourceTable';

const markers = [{
    position: {
      lat: 25.0112183,
      lng: 121.52067570000001,
    },
    key: `Taiwan`,
    defaultAnimation: 2,
}];

class FoodLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResultData: ''
        };
    }

    componentWillReceiveProps() {
      console.log('componentWillReceiveProps');
      var self = this;
      fetch('https://api.smc-connect.org/search?category=Food Pantry&location=' + this.props.zipcode).then(function (response) {
        return response.json();
      }).then(function (json) {
        self.setState({apiResultData: json});
        return true;
      }).catch((ex) => {
        console.log('parsing failed', ex);
      })
    };

    render() {
        return (
          <div>
            <Gmap />
          </div>
        )
    }
}

export default FoodLocations;
