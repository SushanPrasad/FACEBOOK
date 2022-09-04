
import React from 'react';
import "./Sidebar.css";


import SidebarRow from './SidebarRow';


import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import MasksIcon from '@mui/icons-material/Masks';
import FlagIcon from '@mui/icons-material/Flag';


import { Button } from '@mui/material';


function Sidebar() {
  return (<div className='side'>

{/* sidebar ---  */}


<SidebarRow 
         Avatar src="https://ik.imagekit.io/amazonshop/hhghgh_j0vcXsCHQ.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1644426127114"
          title="Sushan" 
  />


<SidebarRow Icon={PeopleIcon} title="Friends" fontSize="large"    />
<SidebarRow Icon={GroupsIcon} title="Groups" fontSize="large"  />
<SidebarRow Icon={StorefrontIcon} title="Market" fontSize="large"  />
<SidebarRow Icon={MusicVideoIcon} title="Watch" fontSize="large"  /> 
<SidebarRow Icon={MasksIcon} title="COVID-19" fontSize="large" />
<SidebarRow Icon={FlagIcon} title="Pages" fontSize="large" />

<a href='/' className='buttonn'>
<Button variant='outlined' className='signout'>
<h3 className='sign'>SignOut</h3></Button>
</a>
  </div>);
}

export default Sidebar;
