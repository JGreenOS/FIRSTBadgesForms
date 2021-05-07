// Page for the form page of the app
import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import { Container } from "../components/Grid"
import LeadershipOne from '../components/Checklist/LeadershipOne.jsx'
import LeadershipTwo from '../components/Checklist/LeadershipTwo.jsx'

function Form () {
    return (
        <div>
            <Navbar />
            <Container fluid>
            <label for="exampleFormControlTextarea2"><strong>Please enter the email address of the student you wish to award the badge to.</strong></label>
            <input type="email" className="form-control" id="exampleFormControlInput1"
            placeholder="name@example.com"/>
                <LeadershipOne />
                <br />
                <LeadershipTwo />
            </Container>
        </div>
    )
}

export default Form;