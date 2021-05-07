import React from 'react';
import Table  from 'react-bootstrap/Table';

function StudentTable() {
    return (
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>MarkO@gmail.com</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Jmaster@yahoo.com</td>
            </tr>
            <tr>
              <td>Dennis</td>
              <td>Feinstein</td>
              <td>moneymaker@charter.net</td>
            </tr>
          </tbody>
        </Table>
    )
}

export default StudentTable;