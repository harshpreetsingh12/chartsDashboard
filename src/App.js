import './App.css'
import './css/index.css'
import LinePlot from './components/linePlot';

import D3chart from'./components/D3chart'
import BarChart from './components/BarChart';
import TableNew from './components/TableNew';
import DoubleBarChart from './components/doublebar/DoubleBarChart';
const App = ()=>{
    return(
        <>
            <D3chart/>
            <div className='chartBoxmain'>
                <LinePlot/>
                <BarChart />
                <DoubleBarChart/>
                <TableNew/>

            </div>
        </>
    )
}
export default App;