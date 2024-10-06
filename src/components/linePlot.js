import React, { Component } from 'react';
import { render } from 'react-dom';
import { scaleLinear, scaleBand } from 'd3-scale';
import XYAxis from './axis/xy-axis';
import Line from './line/line';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';

export default class LinePlot extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'Jan', value: 40 },
        { name: 'Feb', value: 60 },
        { name: 'Mar', value: 30 },
        { name: 'Apr', value: 40 },
        { name: 'May', value: 30 },
        { name: 'Jun', value: 60 },
        { name: 'July', value: 50 },
        { name: 'Aug', value: 55 },
        { name: 'Sep', value: 40 },
        { name: 'Oct', value: 45 },
        { name: 'Nov', value: 50 },
      ],
    }
  }
  randomData = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const data = prevState.data.map(d => ({
        name: d.name,
        value: Math.floor((Math.random() * 100) + 1)
      }))
      return {
        data
      }
    })
  }
  render() {
    const { data } = this.state;
    const parentWidth = 540;

    const margins = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    };

    const width = parentWidth - margins.left - margins.right;
    const height = 200 - margins.top - margins.bottom;

    const ticks = 6;
    const t = transition().duration(1000);

    const xScale = scaleBand()
      .domain(data.map(d => d.name))
      .rangeRound([0, width]).padding(0.1);

    const yScale = scaleLinear()
      .domain(extent(data, d => d.value))
      .range([height, 0])
      .nice();

    const lineGenerator = line()
      .x(d => xScale(d.name))
      .y(d => yScale(d.value))
      .curve(curveMonotoneX);

    return (
      <div className='chartBox'>
        <div className='innerChartBox'>
          <h1>Checking Account</h1>
          <div style={{marginLeft:'auto'}}>
              <select onChange={this.randomData} defaultValue={"Manage"} className='selectBox'>
                <option value={'Manage'}>Manage</option>
                <option>View</option>
              </select>
              <select onChange={this.randomData} defaultValue={'1'} className='selectBox'>
                <option value='1'>Janaury</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
              </select>
          </div>

        </div>
        <svg
          className="lineChartSvg"
          width={width + margins.left + margins.right}
          height={height + margins.top + margins.bottom}
          style={{width:'100%'}}
        >
          <g transform={`translate(${margins.left}, ${margins.top})`}>
            <XYAxis {...{ xScale, yScale, height, ticks, t }} />
            <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
          </g>
        </svg>
      </div>
    );
  }
}

