import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const ChartTwo = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['E1.1', 'E2.1', 'E3.1', 'E4.1', 'E5.1'],
        }}
        height={400}
        width={600}
        options={{
            maintainAspectRatio: false
        }}
      ></Bar>
    </div>
  );
};

export default ChartTwo;
