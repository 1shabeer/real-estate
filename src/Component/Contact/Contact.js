import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faMessage, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import cright from '../../Asset/cright.jpg'

function Contact() {
  return (
  <section className='c-wrapper'>
    <div className=' paddings innerWidth flexCenter c-container'>
        {/* left side */}
        <div className='flexColStart c-left'>
            <span className='orangeText'>Our Contact</span>
            <span className='primaryText'>Easy to Contact us</span>
            <span className='secondaryText'>We always ready to help by providing the best services for you.<br/>
                We belevie a good blace to live can make your life better </span>

               <div className='flexColStart contactmode'>
                  {/* first row */}
                  <div className='flexStart row'>
                    <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <FontAwesomeIcon  icon={faPhone} size='25'/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'>Call</span>
                                <span>012 123  143 14</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Call Now</div>
                    </div>

                    {/* first mode */}
                    <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <FontAwesomeIcon  icon={faVideo} size='25'/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'>Video Call</span>
                                <span>012 123  143 14</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Video Call Now</div>
                    </div>
                  </div>


                  {/* second row */}

                  <div className='flexStart row'>
                    <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <FontAwesomeIcon  icon={faCommentDots} size='25'/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'>Chat</span>
                                <span>012 123  143 14</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Chat Now</div>
                    </div>

                    {/* second mode */}
                    <div className='flexColCenter mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <FontAwesomeIcon  icon={faMessage} size='25'/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'>Message</span>
                                <span>012 123  143 14</span>
                            </div>
                        </div>
                        <div className='flexCenter button'>Message Now</div>
                    </div>
                  </div>
               </div>


        </div>


        {/* right side */}

        <div className='c-right'>
            <div className='image-container'>
                <img src={cright} alt='home'/>
            </div>
        </div>

    </div>
  </section>
  )
}

export default Contact