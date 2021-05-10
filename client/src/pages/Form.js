// Page for the form page of the app
import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import { Container, Row, Col } from "../components/Grid";
import LeadershipOne from '../components/Checklist/LeadershipOne.jsx'
import LeadershipTwo from '../components/Checklist/LeadershipTwo.jsx'
import AddStudents from '../components/AddStudents/AddStudents.jsx'


function Form () {
    return (
        <>
            <Navbar />
            <Container fluid>
                <Row>
                    <Col size="md-4">
                        <label for="exampleFormControlTextarea2"><strong>Please enter the email address of the student you wish to award the badge to:</strong></label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com"/>
                    </Col>
                </Row>
                <LeadershipOne />
                <br />
                <LeadershipTwo />
                <br />
                <AddStudents />
            </Container>
        </>
    )
}

export default Form;