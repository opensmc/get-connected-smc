import React from 'react';


// Much more info can be extracted from the data ...
// TODO: Determine exactly what fields to display from the returned dataset
class ResourceTable extends React.Component {
    render() {

        let data = this.props.data;

        let rows = [];

        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                let resource = data[i];

                let name = '';
                let phone = '';
                let address = '';

                if (resource.name) {
                    name = resource.name;
                }

                if (resource.phones && resource.phones.length > 0) {
                    phone = resource.phones[0].number;
                }

                if (resource.address) {
                    address = resource.address.address_1;
                }

                rows.push(<ResourceTableRow key={i} name={name} phone={phone} address={address}/>);
            }
            ;
        }


        let output =
            <table className="table table-striped">
            <thead>
            <tr>
                <th>Resource</th>
                <th>Phone</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>;


        return (
            rows.length > 0 ? output : <div></div>
        )
    }
}


class ResourceTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.address}</td>
            </tr>
        )
    }
}

export default ResourceTable;