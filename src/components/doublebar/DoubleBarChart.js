import StackedBarChart from "./StackedBarChart";
import colors from "./colors";
import data from "./data";
import keys from "./keys";
import React, { Component } from 'react';
import { render } from 'react-dom';
import { scaleBand, scaleLinear } from 'd3-scale';
import XYAxis from '../axis/xy-axis.js';
import Grid from '../grid/grid.js';
import Bar from '../bar/bar.js';
import { transition } from 'd3-transition';

export default class DoubleBarChart extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'August', value: 120 },
        { name: 'September', value: 150 },
        { name: 'October', value:120 },
        { name: 'November', value: 120 },
        { name: 'December', value: 430 },
        { name: 'January', value: 480 },
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
        <div className='innerChartBox' style={{minHeight:'37px'}}>
          <h1>Total Cash Flow</h1>
          <div style={{marginLeft:'auto'}}>
              <div style={{marginLeft:'auto',display:'flex',gap:'10px'}}>
                <div className='inOutbtns'><span></span>In</div>
                <div  className='inOutbtns'><span style={{background:'green'}}></span>Out</div>  
            </div>
          </div>

        </div>
       {/* <StackedBarChart colors={colors} data={data} keys={keys}/> */}
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
