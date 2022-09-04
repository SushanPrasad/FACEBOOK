import React from 'react';
import {Avatar} from '@material-ui/core';
import './Post.css';
import PublicIcon from '@mui/icons-material/Public';


import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ReplyIcon from '@mui/icons-material/Reply';


function Post({profilePic, username, message, image}) {
  return (
    <div className='post'>

<div className='post_top'>


<Avatar  src={profilePic}
       className='avatar' />


<div className='top_info'>
<h3>{username}</h3>
<p><PublicIcon /></p>
</div>
</div>



<div className=" post_bottom">
  <p>{message}</p>
</div>
 
 
<div className='post_image'>
  <img src= {image} alt="" />
</div>
  
  <hr></hr>
<div className='three_key'>

<div className='optionss'>
 <ThumbUpIcon  />
  <p >Likes</p>
  </div>
  <div className='optionss'>

  <ChatBubbleIcon />
  <p>Comments</p>
</div>
<div className='optionss'>
<ReplyIcon />
  <p> Share</p>
</div>
</div>
<hr></hr>









  </div>
  )
}

export default Post