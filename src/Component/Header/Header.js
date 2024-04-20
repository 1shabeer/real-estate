import React from 'react'
import { useState } from 'react';
import './Header.css'; // Importing the CSS file
import logo from '../../Asset/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


                    
function Header() {

  const [menuopen , setMenuopen] = useState(false)
 

  const getMenuStyle = (menuopen)=>{
    if(document.documentElement.clientWidth <= 800)
    {
      return{right: !menuopen && "-100%"}
    }
  }
  

  return (
    <section className='h-wrapper'>
        <div className=' flexCenter paddings innerWidth h-container'>
        
         <img src={logo} alt='logo' width={100} />

            <div className='flexCenter h-menu' style={getMenuStyle(menuopen)}>
                <a href=''>Residencies</a>
                <a href=''>Our values</a>
                <a href=''>Contact Us</a>
                <a href=''>Get Started</a>
                <button className='button'>
                <a href=''>Contact</a>
                </button>
                
            </div>
            <div className='menu-icon' onClick={()=>setMenuopen((prev)=>!prev)}>
          <FontAwesomeIcon icon={faBars}/>
        </div>
        </div>

        
    </section>
  )
}

export default Header