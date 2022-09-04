import React from "react";

import "./Feed.css";
import StoryReel from './StoryReel';
import MessengerSender from './MessengerSender';
import Post from "./Post";


function Feed() {

 


  return (
    <div className="feed">
    <StoryReel />
    <MessengerSender />
 
       
  
     
      <Post 
profilePic="https://ik.imagekit.io/amazonshop/3220bbc96c4afcd02214eb26cb52dc57_Sj_Ca7e0M.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645458124698"
message="The family is one of nature's masterpieces"
timestamp="timestamp"
username="Mark Elliot Zuckerberg"
image="https://ik.imagekit.io/amazonshop/_97580326_zuckerbergfamily_y1xrjoj_ee.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645458123487"

    
        />  
        
    <Post 
profilePic="https://ik.imagekit.io/amazonshop/VRG_ILLO_4028_VC_Sundar.0_99x3jH3KB.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1645458125654"
message="Figuring out what the next big trend is tells us what we should focus on. I love technology while growing up."
timestamp="timestamp"
username="Pichai Sundararajan"
image="https://ik.imagekit.io/amazonshop/2021-04-07-image-49-j_1100_7RlrqoinX.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1645458124987"

    
        />


            <Post 
profilePic="https://ik.imagekit.io/amazonshop/APJ-Abdul-Kalam-Education-1_0Ewy3LEdXh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645458359501"
message="Dream is not the thing you see in sleep but is that thing that doesn't let you sleep."
timestamp="timestamp"
username="Avul Pakir Jainulabdeen Abdul Kalam"
image="https://ik.imagekit.io/amazonshop/94143997_3415280188506118_7046478235223195648_n_GCIiaJ_vcSz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645458363264"

    
        />  
        
        <Post 
profilePic="https://ik.imagekit.io/amazonshop/272090619_500777098078237_5980201928301125546_n_LxJ9zOhOf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644501827268"
message="Never marry the one you can live with, marry the one you cannot live without."
timestamp="timestamp"
username="Ranveer Singh"
image= " https://ik.imagekit.io/amazonshop/ranveer-singh-and-deepika-padukone-in-a-photo-shoot-before-their-mumbai-marriage-reception_1024-768_fujm4vkSJTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644500982341"      
   
        />
        
    
        
        
          </div>
    
  )
}

export default Feed;