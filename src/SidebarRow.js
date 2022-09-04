import {Avatar} from "@material-ui/core" ;
import React from 'react';
import './SidebarRow.css';

function SidebarRow({src, Icon, title} ) {
  return (<div className=' row'>

{/* sidebarrow where it merge from sidebar. props parameter has been used  in the name of icon , title, src */}


  {src && <Avatar src={src} />}
  { Icon && <Icon />}
 <h1 className="titles" > {title} </h1>
  






  </div>);
}

export default SidebarRow;
