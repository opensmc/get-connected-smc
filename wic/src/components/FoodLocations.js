import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import ResoruceMap from './ResoruceMap';
import ResourceTable from './ResourceTable';

class FoodLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    findFoodLocations() {
      const self = this;
      const url = `https://api.smc-connect.org/search?category=Food Pantry&location=${this.props.zipcode}`;
      return Promise.resolve(true).then(() => {
        return Promise.resolve(fetch(url));
      }).then((response) => {
        return response.json();
      }).then((locations) => {
        return locations.filter((location) => location && location.longitude && location.latitude);
      }).then((locations) => {
        self.setState({locations: locations});
        return true;
      }).catch((ex) => {
        console.log('[FoodLocations.js] parsing failed', ex);
      });
    }

    componentDidMount() {
      this.findFoodLocations();
    }

    render() {
      return (
        <div>
          <ResoruceMap zipcode={this.props.zipcode} locations={this.state.locations || []}/>
          <ResourceTable locations={this.state.locations || []}/>
        </div>
      )
    }
}

export default FoodLocations;
