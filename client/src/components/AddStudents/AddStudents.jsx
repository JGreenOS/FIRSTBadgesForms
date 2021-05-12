import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';

function StudentForm (props) {

    return (
        // <form onSubmit={(e) => {signMeUp(e)}}>
        //     <div className="form">
        //         <h3><strong>Use this form to add a student to your team's list </strong></h3>
        //         <div>
        //         <label>First Name</label>
        //         <input type="text" name="first_name" id='first_name'
        //         // onChange={handleInputChange}
        //         /></div>
        //     <div>
        //         <label>Last Name</label>
        //         <input type="text" name="last_name" id='last_name'
        //         // onChange={handleInputChange}
        //         /></div>
        //     <div>
        //         <label>Student Email Address</label>
        //         <input type="text" name="email" id='email'
        //         // onChange={handleInputChange}
        //         /></div>
        //     <div>
        //         <label> Team Number</label>
        //         <input type="number" name="team_number" id='team_number'
        //         // onChange={handleInputChange}
        //         /></div>
        //         <button type="submit" className="button" 
        //         // onClick={handleFormSubmit} 
        //         // disabled={!(formObject.first_name && formObject.last_name && formObject.email && formObject.team_number)}
        //         >Save Student</button>

        //     </div>
        // </form>
        <Form className='add-student-form' onSubmit={props.handleSubmit}>
            <Form.Group placeholder="First name" controlId='formGroupFirstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                onChange={props.handleChange}
                type='first_name'
                name='first_name'
                placeholder='First Name'
                />
            </Form.Group>
            <Form.Group controlId='formGroupLastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                onChange={props.handleChange}
                type='last_name'
                name='last_name'
                placeholder='Last Name'
                />
            </Form.Group>
            <Form.Group controlId='formGroupEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                onChange={props.handleChange}
                type='email'
                name='email'
                placeholder='Enter email'
                />
            </Form.Group>
            <Form.Group controlId='formGroupTeamNumber'>
                <Form.Label>Team Number</Form.Label>
                <Form.Control
                onChange={props.handleChange}
                type='team_number'
                name='team_number'
                placeholder='Team Number'
                />
            </Form.Group>
            <Button type='submit' style={{ margin: '2px' }}>
                Add student
            </Button>
        </Form>

    )
}

export default StudentForm; 