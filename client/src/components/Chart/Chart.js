import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team_number: '',
      Badge_Name: '',
      students: [],
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Students',
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
            ],
          },
        ],
      },
    };
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const numberString = this.state.team_number;
    console.log(this.state.team_number);
    const teamInt = parseInt(numberString, 10);
    axios
      .get('/api/stats', {
        params: {
          team_number: teamInt,
        },
      })
      .then((res) => {
        const chartMaker = res.data.items;
        let newLabels = [];
        chartMaker.forEach((element) => {
          if (newLabels.includes(element.Badge_Name))
            console.log('Duplicate:', element.Badge_Name);
          else {
            newLabels.push(element.Badge_Name);
          }
        });

        this.setState({
          students: res.data.items,
          chartData: {
            labels: newLabels,
            datasets: [
              {
                label: 'Students',
                data: [5, 3, 2],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                ],
              },
            ],
          },
        });
        console.log('This is the current state:', this.state.students);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <Form className='team-selector-form' onSubmit={this.handleSubmit}>
          <Form.Row className='align-items-center'>
            <Form.Label className='mr-sm-2' htmlFor='inlineFormCustomSelect'>
              Please select a team number
            </Form.Label>
            <Form.Control
              as='select'
              className='mr-sm-2'
              id='inlineFormCustomSelect'
              type='team_number'
              name='team_number'
              value={this.state.team_number}
              custom
              onChange={this.handleChange}
            >
              <option value='0'>Choose...</option>
              <option value='27'>27</option>
              <option value='29'>29</option>
              <option value='33'>33</option>
              <option value='1023'>1023</option>
              <option value='3537'>3537</option>
              <option value='4381'>4381</option>
            </Form.Control>
            <Button type='submit'>Submit</Button>
          </Form.Row>
        </Form>
        <div className='chart'>
          <Bar
            data={this.state.chartData}
            width={150}
            height={50}
            options={{
              maintainAspectRatio: true,
            }}
          />
        </div>
      </>
    );
  }
}

export default Chart;
