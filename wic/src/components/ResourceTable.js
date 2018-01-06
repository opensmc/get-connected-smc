import React from 'react';


// Much more info can be extracted from the data ...
// TODO: Determine exactly what fields to display from the returned dataset
class ResourceTable extends React.Component {
  render() {
    function ResourceTableRow(data) {
      const location = data.location;
      return <tr>
        <td>
          {location.organization && location.organization.website ? <a target='_blank' href={location.organization.website}>{location.name || ''}</a> : location.name || ''}
        </td>
        <td>{location.phones && location.phones.length ? location.phones[0].number : ''}</td>
        <td>{location.address && location.address.address_1 ? location.address.address_1 : ''}</td>
      </tr>;
    }

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Resource</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    { (this.props.locations || []).map((location, idx) => <ResourceTableRow key={idx} location={location} />) }
                </tbody>
            </table>
        </div>
    );
  }
}

export default ResourceTable;