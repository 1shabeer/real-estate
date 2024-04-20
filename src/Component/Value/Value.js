import React from 'react'
import { Accordion, AccordionItem,  AccordionItemHeading, 
     AccordionItemButton,  AccordionItemPanel, AccordionItemState,
     } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css'; // Import the styles
import './Value.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import leftpic from '../../Asset/res 2.jpg'
import data from '../../utils/accordion'
import { useState  } from 'react';


function Value() {

  const [dropdown , setDropdown] = useState(null)

  return (
    <section className='v-wrapper'>
        <div className='paddings innerWidth flexCenter v-container'>
           {/* left side */}
           <div className='v-left'>
              <div className='image-container'>
                 <img src={leftpic} alt='img'/>
              </div>
           </div>

            {/* right side */}

            <div className='flexColStart v-right'>
               <span className='orangeText'>Our Value</span>
               <span className='primaryText'>Value We Give to You</span>
               <span className='secondaryText'>We always ready to help by providing the best services for you 
               <br /> We beleive a good blace to live can make your life better</span>


            <Accordion className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}>

               {
                 data.map((item , i)=>{ 
                  return(
                    <AccordionItem className= {`accordionItem ${dropdown}`} key={i} uuid={i}>
                        <AccordionItemHeading>
                          <AccordionItemButton className='flexCenter accordionButton'>
                               
 
                              < AccordionItemState>
                                  {({expanded})=> expanded ? setDropdown("expanded"): setDropdown("collapsed")}
                              </AccordionItemState>
                          
                            <div className='flexCenter icon'>{item.icons}</div>
                            <span className='primaryText'>{item.heading}</span>
                            <div className='flexCenter icon'>
                              <FontAwesomeIcon icon={faSortDown}  />
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                          <p className='secondaryText'>{item.detail}</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                  )
                 })
               }

            </Accordion>
           
            </div>
        </div>
    </section>
  )
}

export default Value