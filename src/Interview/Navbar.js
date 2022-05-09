import React, { useState } from 'react'

function Navbar() {
  const [status,setStatus]=useState();

  return (<>
   
    <div className="header">
    
    <div className="manu-item" >
     <div className='menu-btn' onClick={()=>{
          setStatus("active_manu");
     }}>
     
     <ion-icon  name="menu-outline" ></ion-icon>
     
     </div>
     
     </div>
     <div className={`sidebar ${status}`}>
     <div className="close-btn" onClick={()=>{
        setStatus("none");
     }}>
     <ion-icon name="close-outline"> </ion-icon>
     </div>
      
     <div className="language">
       <a href="#" className='btn-eng'>English</a>
       <a href="#" className='btn-hindi'>Hindi</a>
     </div>
     <hr  style={{color:"white"}}/>
       <ul>
         <li style={{background:"rgba(0, 0,0,0.3)"}}> <a href='#'>All News</a> </li>
         <li> <a href='/india'> India</a> </li>
         <li> <a href='/business'>Business</a> </li>
         <li> <a href='/sports'>Sports</a></li>
         <li> <a href='/politics'>Politics</a></li>
         <li> <a href='/technology'>Technology</a></li>
         <li> <a href='/startup'>Startup</a></li>
         <li> <a href='/entertainment'>Entertainment</a></li>
         <li> <a href='/miscellaneous'>Miscellaneous</a></li>
         <li> <a href='/hatke'>Hatke</a></li>
         <li> <a href='science'>Science</a></li>
         <li> <a href='/automobile'>Automobile</a></li>
         

       </ul>
    
    </div>
      <div className="brand">
        <img src="./images/logo_inshorts.png" alt="hello" className='logo' />
      </div>

    </div>
     
    </>

  )
}

export default Navbar