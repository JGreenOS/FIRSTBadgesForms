import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table  from 'react-bootstrap/Table';
import StudentTableMap from '../StudentTableItem/StudentTableMap';
import axios from 'axios';


class TeamDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team_number: '',
            students: []
        }
      }
    
      handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ ...this.state, [event.target.name]: event.target.value });
      };
    
       handleSubmit = (event) => {
        console.log(this.state.team_number);
        const numberString = this.state.team_number
        const teamInt = parseInt(numberString, 10)
        this.setState({
            team_number: teamInt
        })
        const userData = {
          team_number: this.state.team_number
        };
        console.log(userData);
        console.log(teamInt);
        axios
          .get('http://localhost:8080/api/team/getteam', {
            team_number: this.state.team_number
          })
          .then((res) => {
            console.log(res);
            this.setState({
              students: res.data.items
            })
          })
          .catch((err) => console.log(err));
    
          event.preventDefault();
        //   this.setState({
    
        // })
      };

    render() {
    return(
        <>
            <Form className='team-selector-form' onSubmit={this.handleSubmit}>
                <Form.Row className="align-items-center">
                    <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
                        Please select a team number
                    </Form.Label>
                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                        type='team_number'
                        name='team_number'
                        value={this.state.team_number}
                        custom
                        onChange={this.handleChange}
                    >
                        <option value="0">Choose...</option>
                        <option value="27">27</option>
                        <option value="29">29</option>
                        <option value="33">33</option>
                        <option value="1023">1023</option>
                        <option value="3537">3537</option>
                        <option value="4381">4381</option>
                    </Form.Control>
                    <Button type="submit">Submit</Button>
                </Form.Row>
            </Form>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Badges</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.students.length ? (
                    <StudentTableMap 
                        studentState={this.state.students}>
                    </StudentTableMap>
                    )
                    :(
                    <tr>No students currently to display</tr>
                    )}
                </tbody>
            </Table>
        </>
    )
    }
}

export default TeamDropDown;