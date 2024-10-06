import React, { Component } from 'react';
import { render } from 'react-dom';
import { scaleBand, scaleLinear } from 'd3-scale';
import XYAxis from './axis/xy-axis.js';
import Grid from './grid/grid.js';
import Bar from './bar/bar.js';
import { transition } from 'd3-transition';

export default class BarChart extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'Older', value: 100 },
        { name: 'Jan 1-8', value: 50 },
        { name: 'Jan 9-16', value: 300 },
        { name: 'Jan 17-24', value: 250 },
        { name: 'Jan 25-31', value: 200 },
        { name: 'Future', value: 180 },
      ],
    }
  }
  randomizeData = (e) => {
    e.preventDefault();
    const data = this.state.data.map(obj => ({
      name: obj.name,
      value: Math.floor(Math.random() * 500 + 1)
    }))
    this.setState({ data });
  }
  render() {
    const { data } = this.state;
    const parentWidth = 540;
    const margin = {
      top: 10,
      right: 10,
      bottom: 20,
      left: 40,
    };
    const ticks = 6;
    const t = transition().duration(1000);

    const width = parentWidth - margin.left - margin.right;
    const height =200;

    const xScale = scaleBand()
      .domain(data.map(d => d.name))
      .range([0, width])
      .padding(0.26);

    const yScale = scaleLinear()
      .domain([0, Math.max(...data.map(d => d.value))])
      .range([height, 0])
      .nice();

    return (
        <div className='chartBox'>
        <div className='innerChartBox'>
          <h1>Invoies owed to you</h1>
          <div style={{marginLeft:'auto'}}>
              <button onClick={this.randomizeData} className='ButtonSales'>New Sales Invoice</button>
          </div>

        </div>
        <svg width={width + margin.left + margin.right} height={height}>
          <g>
            <XYAxis {...{ xScale, yScale, height, ticks, t , extra:20}} />
            {/* <Grid {...{ xScale, yScale, width, ticks, t }} /> */}
            <Bar
              {...{
                xScale,
                yScale,
                data,
                height,
                t,
              }}
            />
          </g>
        </svg>
      </div>
    );
  }
}

