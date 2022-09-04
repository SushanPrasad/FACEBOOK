import React from 'react'
import Button from '@material-ui/core/Button'
import "./Signing.css";
import { auth , provider } from './firebase';
import SignIn from './Signin';


function Signing() {

  return (

    <div className='login'>
    
    <div className = "login_logo">
            
                <img 
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                   alt = ""
                />
                
               <img 
                    className = "logo_name"
                    src = "https://ik.imagekit.io/amazonshop/Facebook-Logo.wine_aQxZ9sdCY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644676131819"
                     alt = ""
                />
    </div>
            
          <SignIn />
          
            </div>  
    )
}

export default Signing;