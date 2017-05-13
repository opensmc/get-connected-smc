import React from 'react';
import ResourceTable from './ResourceTable';

class FoodLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResultData: ''
        };
    }

    componentWillReceiveProps() {
        var self = this;
        fetch('https://api.smc-connect.org/search?keyword=food&location=' + this.props.zipcode)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
               self.setState({apiResultData: json});
            self.setState({apiResultData: json});
            }).catch(
                function (ex) {
                    console.log('parsing failed', ex);
                }
        )};

    render()
    {
        return (
            <div><ResourceTable data={this.state.apiResultData}/></div>
        )
    }
}

export default FoodLocations;