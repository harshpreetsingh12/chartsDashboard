import React from 'react';
import Axis from './axis';

const XYAxis = ({ xScale, yScale, height, extra=0 }) => {
  const xSettings = {
    scale: xScale,
    orient: 'bottom',
    transform: `translate(0, ${height-extra})`,
    AxisStyle:'xaxisClass'
  };
  const ySettings = {
    scale: yScale,
    orient: 'left',
    transform: 'translate(0, 0)',
    ticks: 6,
    AxisStyle:'yAxisClass'
  };
  return (
    <g className="axis-group">
      <Axis {...xSettings}  />
      <Axis {...ySettings} />
    </g>
  );
};

export default XYAxis;
