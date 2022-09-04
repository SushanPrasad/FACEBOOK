import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StoreIcon from '@mui/icons-material/Store';
import GroupsIcon from '@mui/icons-material/Groups';
import ExtensionIcon from '@mui/icons-material/Extension';

import {Avatar} from '@material-ui/core';
import AppsIcon from '@mui/icons-material/Apps';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-link';
 

function Header() {
  return (<div className="head">
  {/* top --- search, icons */}

  
  <div className='left'>
  <Link to="/home">
   <img src="https://ik.imagekit.io/amazonshop/facebook-logo-2019_AJMHaiJynqi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643280415131" alt='' className='fbicon' />
   </Link>
     <div className='input' >
    <SearchIcon />
    <input placeholder="Facebook search" type="text"/>
    </div>
    </div>
    

<div className='option_m'>
    
      <div className='middle'>
      <HomeIcon  fontSize="large"/>
      </div>

      <div className='middle'>
      <OndemandVideoIcon  fontSize="large" />
      </div>
      <div className='middle'>
      <StoreIcon fontSize="large" />
       </div>   
    
      <div className='middle'>
       <GroupsIcon fontSize="large" />
      </div>
      
      <div className='middle'>
      <ExtensionIcon fontSize="large"  />
      </div>


</div>

<div className='option_right'>

      <div className='right'>
      <Avatar src="https://ik.imagekit.io/amazonshop/hhghgh_j0vcXsCHQ.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1644426127114"/>
      </div>
      <div className='name'> Sushan  </div>
      <div className='right'>
      <AppsIcon fontSize="large" />
      </div>
      <div className='right'>
      <ChatIcon fontSize="large" />
      </div>
      <div className='right'>
      <NotificationsIcon fontSize="large" />
     </div>
      <div className='right'>
      <ArrowDropDownIcon fontSize="large" />
      </div>


</div>

  </div>);
}

export default Header;
