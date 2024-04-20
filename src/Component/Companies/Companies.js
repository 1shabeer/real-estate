import React from 'react'
import './Companies.css'
import com  from '../../Asset/com.png'
import com1 from '../../Asset/com 1.png'
import com2 from  '../../Asset/com 2.png'
import com3 from   '../../Asset/com 3.png'


function Companies() {
  return (
    <section className='c-wrapper'> 
        <div className='paddings innerWidth  c-container'> 
            <img src={com} />
            <img src={com1} />
            <img src={com2} />
            <img src={com3} />
        </div>
    </section>
  )
}

export default Companies