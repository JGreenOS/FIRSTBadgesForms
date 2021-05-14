import React, { Component } from "react";
import StudentTableItem from "./StudentTableItem";

class StudentTableMap extends Component {

    render() {
        return (
            this.props.studentState.map((student) => (
                <StudentTableItem
                first_name={student.first_name}
                last_name={student.last_name}
                email={student.email}
                />
            ))
        )
    }
}

export default StudentTableMap;