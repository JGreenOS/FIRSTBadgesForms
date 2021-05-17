import React, { Component } from 'react';

class StudentTableItem extends Component {
  render() {

    return (
      <tr>
        <td>{this.props.first_name}</td>
        <td>{this.props.last_name}</td>
        <td>{this.props.email}</td>
        <td>{this.props.req_id}</td>
      </tr>
    );
  }
}

export default StudentTableItem;
