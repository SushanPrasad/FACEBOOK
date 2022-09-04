import React, { useState } from 'react';
import {Avatar, Input} from '@material-ui/core';
import './MessengeSender.css';


import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function MessengerSender(){
  const [input, setInput]=useState('')
  const [image, setImage]=useState(null)


const handleChange = (e) => {
  if (e.target.file [0]) {
    setImage (e.target.files [0])
  }
} 


const handleSubmit= (e) => {
  console.log('Submitting')
     {/*e.preventDefault ();//submit
     //enter click blank our   text


     setInput("");
     //enter disappear work here*/}

                            };
  return(
          <div className='MessengerSender'>

<div className='top'>
<Avatar  src="https://ik.imagekit.io/amazonshop/facebook-logo-2019_AJMHaiJynqi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643280415131" />


<form> 
<input  classname= 'input' 
        type="text"
        placeholder={ `What's on your mind` }
        value={input} 
        onChange= {(e) => setInput (e.target.value)}
       />
  
  
<Input  className= 'file_image'
         type="file" 
        onChange={handleChange} 
         />


<button onClick = {handleSubmit} 
       type="submit"> submit</button> 

</form>
 </div>



<div className='bottom'>
    <div className='option'>
<VideoCameraFrontIcon style={{ color:"red"}} fontSize="large" />
<h3>Live Video</h3>

</div>

<div className='option'>
<PhotoLibraryIcon  style={{ color:"green"}} fontSize="large" />
<h3>Photo/video </h3>
    
</div>

<div className='option'>
<EmojiEmotionsIcon style={{ color:"yellow"}}  fontSize="large" />
  <h3>Feeling/Activity</h3>  
</div>

</div>
</div>

  );
}

export default MessengerSender;
