import React from 'react'
import './Main.css'
import Hr from '../../Asset/res 1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'
import { motion } from "framer-motion"



function Main() {
  return (
   <section className='m-wrapper'>
       <div className='flexCenter paddings innerWidth m-container '>
           
       {/* left side */}
             <div className=' flexColStart m-left'>

                  <div className='m-title'>
                    <div className='orange-circle'/>
                    <motion.h1
                      initial={{y:"2rem",opacity:0}} 
                      animate={{y:0,opacity:1}}
                      transition={{
                        duration:2,
                        type:"spring"
                      }}   
                           >Discover <br/> Most Suitable <br/> Property</motion.h1>
                  </div>


                  <div className='flexColStart m-des'>
                       <span className='secondaryText'>Find a variety of prperties that suit you very easily</span>
                       <span className='secondaryText'>Forget all difficulties in finding a residencies for you</span>
                  </div>

       {/* Search bar section */}

                  <div className='flexCenter search-bar'>
                  <FontAwesomeIcon icon={faLocationDot} style={{color:'blue'}}/>
                  <input type='text' />
                  <button className='button'>Search</button>
                  </div>
      {/* Countup section */}

                  <div className='flexCenter stats'>
                    
                      <div className='flexColCenter stat'>
                        <span>  <CountUp start={8800} end={9000} duration={4}/>  
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                      </div>

                      <div className='flexColCenter stat'>
                        <span>  <CountUp start={1800} end={2000} duration={4}/>  
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customer</span>
                      </div>

                      <div className='flexColCenter stat'>
                        <span>  <CountUp  end={28} duration={4} />  
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winning</span>
                      </div>

                  </div>

             </div>

      {/* right side */}
             <div className=' flexCenter m-right'>
                 <motion.div 
                 initial={{x: "7rem",opacity:0}}
                 animate={{x: 0 , opacity:1}}
                 transition={{
                  duration:2,
                  type:"spring"
                 }}
                 className='image-container'>
                    <img src={Hr} alt=''/>
                 </motion.div>
             </div>
 
       </div>
   </section>
  )
}

export default Main