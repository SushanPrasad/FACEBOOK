import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Signing from './Signing';


import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {


  return (
    <div className="App"> 

     <Router>
      <Routes>
<Route path='/' element={<Signing />}/>

<Route path='/home' element={<>
        
     <Header />
        
   <div className = "App_body" >
    
    <Sidebar />

    <Feed />

    <Widget />
 
   </div>
                                   </>}/>

      </Routes>
     </Router>   
    
       
    </div>
    

  )
}

export default App;