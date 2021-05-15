import React, { Component } from "react";
import { Bar } from "react-chartjs-2";


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Badge 1", "Badge 2", "Badge 3", "Badge 4"],
        datasets: [
          {
            label: "Students",
            data: [1, 2, 3, 4, 5],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
        <div className="chart">
               <Bar
          data={this.state.chartData}
          width={150}
          height={50}
          options={{
            maintainAspectRatio: true,
          }}
        />
      </div>
    );
  }
}

export default Chart;

