// Page for the form page of the app
import React from 'react';
import { Container, Row, Col } from '../components/Grid';
import LeadershipOne from '../components/Checklist/LeadershipOne.jsx';
import LeadershipTwo from '../components/Checklist/LeadershipTwo.jsx';
import AddStudents from '../components/AddStudents/AddStudents.jsx';

const Form = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col size='md-8'>
            <label for='exampleFormControlTextarea2'>
              <strong>
                Please enter the email address of the student you wish to award
                the badge to:
              </strong>
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='name@example.com'
            />
          </Col>
        </Row>
        <LeadershipOne />
        <br />
        <LeadershipTwo />
        <br />
        <Row>
          <Col size='md-12' className='form-control'>
            <AddStudents />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Form;
