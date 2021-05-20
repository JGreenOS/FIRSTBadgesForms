import React, { useState, Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './style.css';

class AddStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      team_number: '',
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    const userData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      team_number: this.state.team_number,
    };
    console.log(userData);
    axios
      .post('/api/form/newstudent', {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        team_number: this.state.team_number,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    event.preventDefault();
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      team_number: '',
    });
  };
  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Add a New Student</h1>
        <Form
          style={{ display: 'flex', justifyContent: 'space-between' }}
          onSubmit={this.handleSubmit}
        >
          <Form.Group placeholder='First name' controlId='formGroupFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              className='add-student-form'
              type='first_name'
              name='first_name'
              value={this.state.first_name}
              placeholder='First Name'
            />
          </Form.Group>
          <Form.Group controlId='formGroupLastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              className='add-student-form'
              type='last_name'
              name='last_name'
              value={this.state.last_name}
              placeholder='Last Name'
            />
          </Form.Group>
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              className='add-student-form'
              type='email'
              value={this.state.email}
              name='email'
              placeholder='Enter email'
            />
          </Form.Group>
          <Form.Group controlId='formGroupTeamNumber'>
            <Form.Label>Team Number</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              className='add-student-form'
              type='team_number'
              value={this.state.team_number}
              name='team_number'
              placeholder='Team Number'
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </Form.Group>
          <Button type='submit'>Add student</Button>
        </Form>
      </>
    );
  }
}

export default AddStudents;
