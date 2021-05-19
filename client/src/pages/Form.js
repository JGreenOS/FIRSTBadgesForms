// Page for the form page of the app
import React, { useState } from 'react';
import { Container, Row, Col } from '../components/Grid';
import LeadershipOne from '../components/Checklist/LeadershipOne.jsx';
import LeadershipTwo from '../components/Checklist/LeadershipTwo.jsx';
import AddStudents from '../components/AddStudents/AddStudents.jsx';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const StuForm = (props) => {
  const [state, setState] = useState({
    email: '',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get('http://localhost:8080/api/form/getstudent', {
        params: {
          email: state.email,
        },
      })
      .then((res) => {
        console.log(res.data);
        setState({
          email: res.data.email,
        });
      })
      .catch((err) => console.log(err));
    console.log(state);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Form
            onSubmit={handleSubmit}
            style={{
              maxWidth: '200px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Form.Group controlId='studentSearch'>
              <Form.Control
                onChange={handleChange}
                value={state.email}
                type='email'
                name='email'
                placeholder='Enter email'
              />
            </Form.Group>
          </Form>
        </Row>
        <Col size='md-6'>
          <LeadershipOne {...state} />
          <br />
          <LeadershipTwo {...state} />
          <br />
        </Col>
        <Row>
          <Col size='md-12' className='form-control'>
            <AddStudents />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StuForm;
