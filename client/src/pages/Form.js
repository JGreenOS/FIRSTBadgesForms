// Page for the form page of the app
import React, { useState } from 'react';
import { Container, Row, Col } from '../components/Grid';
import LeadershipOne from '../components/Checklist/LeadershipOne.jsx';
import LeadershipTwo from '../components/Checklist/LeadershipTwo.jsx';
import AddStudents from '../components/AddStudents/AddStudents.jsx';
import ElectronicsOne from '../components/Checklist/Electronics1';
import ElectronicsTwo from '../components/Checklist/Electronics2';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const StuForm = (props) => {
  const [state, setState] = useState({
    email: '',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleReset = (event) => {
    let formToReset = document.getElementsByClassName('whatever');
    console.log(formToReset);
    for (let j = 0; j < formToReset.length; j++) {
      let checkboxes = formToReset[j].getElementsByTagName('input');
      for (let i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes[i].checked);
        checkboxes[i].checked = false;
      }
    }
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
          <div
            style={{
              textAlign: 'center',
              width: '100%',
            }}
          >
            <Form
              onSubmit={handleSubmit}
              className='form-group'
              style={{
                textAlign: 'center',
                padding: '5%',
              }}
            >
              <Form.Group controlId='studentSearch'>
                <Form.Control
                  onChange={handleChange}
                  value={state.email}
                  type='email'
                  name='email'
                  placeholder='Enter email'
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Group>
            </Form>
          </div>
        </Row>
        <h4 className='email-prop'>
          <b>Student Email: {state.email}</b>
        </h4>
        <Row>
          <Col size='md-6'>
            <ElectronicsOne {...state} handleReset={handleReset} />
            <br />
            <ElectronicsTwo {...state} handleReset={handleReset} />
            <br />
          </Col>
          <Col size='md-6'>
            <LeadershipOne {...state} handleReset={handleReset} />
            <br />
            <LeadershipTwo {...state} handleReset={handleReset} />
            <br />
          </Col>
        </Row>
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
