import {useState, useEffect } from 'react';
import logo from "../assets/Assiduus_logo.png"
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WindowIcon from '@mui/icons-material/Window';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const SideBaar = () => {
  // const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

  // function onMouseMove(event) {
  //   const [x, y] = d3.pointer(event);
  //   setData(data.slice(-200).concat(Math.atan2(x, y)));
  // }
  const [activeSide,setActive]=useState('Dashboards')
  const ShiftSideBar=(e)=>{
    const states=e.target.getAttribute('data-key')
    setActive(states)
  }
  return (
  <div className='sidebarMain'>
    <div className='mainLogo'>
        <img src={logo} alt={"logo"} />
    </div>
        <ul className='uiBarLi' onClick={ShiftSideBar}>
            <li className={`${activeSide==='Dashboards' && "activeLi"}`} data-key='Dashboards'>
            <WindowIcon fontSize='small'/>
              Dashboards</li>
            <li data-key='Accounts' className={`${activeSide==='Accounts' && "activeLi"}`}><AttachMoneyIcon fontSize='small'/>Accounts</li>
            <li data-key='Payroll' className={`${activeSide==='Payroll' && "activeLi"}`}><AccountBalanceWalletIcon fontSize='small'/>Payroll</li>
            <li data-key='Report' className={`${activeSide==='Report' && "activeLi"}`}><DescriptionIcon fontSize='small'/>Report</li>
            <li data-key='Advisor' className={`${activeSide==='Advisor' && "activeLi"}`}><PersonIcon fontSize='small'/>Advisor</li>
            <li data-key='Contacts' className={`${activeSide==='Contacts' && "activeLi"}`}><AccountBoxIcon fontSize='small'/>Contacts</li>
        </ul>
  </div>
  )
}

export default SideBaar