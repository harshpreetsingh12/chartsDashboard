import {useState, useEffect } from 'react';
import * as d3 from "d3";
import SideBaar from './SideBaar';
import TopBar from './TopBar';

const D3chart = () => {
  // const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  // function onMouseMove(event) {
  //   const [x, y] = d3.pointer(event);
  //   setData(data.slice(-200).concat(Math.atan2(x, y)));
  // }

  return (
    <div>
    <SideBaar/>
    <TopBar/>
 

  </div>
  )
}

export default D3chart