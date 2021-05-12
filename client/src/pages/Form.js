// Page for the form page of the app
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx'
import { Container, Row, Col } from "../components/Grid";
import LeadershipOne from '../components/Checklist/LeadershipOne.jsx'
import LeadershipTwo from '../components/Checklist/LeadershipTwo.jsx'
import AddStudents from '../components/AddStudents/AddStudents.jsx'
import axios from 'axios';

const Form = (props) =>{
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        team_number: ''
      });

      const handleChange = (event) => {
        console.log(event.target.value);
        setState({ ...state, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        const userData = {
          first_name: state.first_name,
          last_name: state.last_name,
          email: state.email,
          team_number: state.team_number
        };
        console.log(userData);
        axios
          .post('http://localhost:8080/api/form/newstudent', {
            first_name: state.first_name,
            last_name: state.last_name,
            email: state.email,
            team_number: state.team_number
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      };



    return (
        <>
            <Navbar />
            <Container fluid>
                <Row>
                    <Col size="md-8">
                        <label for="exampleFormControlTextarea2"><strong>Please enter the email address of the student you wish to award the badge to:</strong></label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com"/>
                    </Col>
                </Row>
                <LeadershipOne />
                <br />
                <LeadershipTwo />
                <br />
                <Row>
                    <Col size="md-12" className="form-control" >
                    
                    <AddStudents handleChange={handleChange} handleSubmit={handleSubmit} />
                    </Col>
                
                </Row>
            </Container>
        </>
    )
}

export default Form;