import React, { Component } from 'react';

class StudentTableItem extends Component {

    render() {

        const {student} = this.props

        return (
            <tr>
                <td>{this.props.first_name}</td>
                <td>{this.props.last_name}</td>
                <td>{this.props.email}</td>
                <td></td>
          </tr>
        )
    }
};

export default StudentTableItem;