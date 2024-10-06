import {useState, useEffect } from 'react';
import search from "../assets/magnifying-glass-solid.svg"
import picuter from "../assets/me.png"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const TopBar = () => {

  return (
  <div className='TopBarStyles'>
        <div className='SearchBar'>
          <span className='searchIcon'> <img src={search} alt={"logo"} /></span>
          <input type="text" />
          </div>
          <NotificationsActiveIcon style={{margin:'0 10px'}}/>
          <span className='profilePic'> <img src={picuter} alt={"logo"} /></span>
          <ArrowDropDownIcon/>
</div>
  )
}

export default TopBar