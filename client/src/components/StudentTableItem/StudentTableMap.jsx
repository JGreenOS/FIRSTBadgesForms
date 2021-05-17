import React, { Component } from 'react';
import StudentTableItem from './StudentTableItem';

class StudentTableMap extends Component {
  render() {
    return this.props.studentState.map((student) => (
      <StudentTableItem
        first_name={student.Student_First_name}
        key={Math.random().toString()}
        last_name={student.Student_Last_Name}
        email={student.email}
        req_id={student.Badge_Name}
      />
    ));
  }
}

export default StudentTableMap;
