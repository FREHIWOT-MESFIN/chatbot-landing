import React from 'react'
import './mail.css'

function Mailing() {
  return (
    <div className='mail-container'>
      <h3>JOIN OUR MAILING LIST</h3>
      <p>Lorem ipsum dolor, sam facere amet voluptatem.</p>
      <div className="email">
         <input type="email" placeholder='Email Address'/>
         <div className="i-bg">
           <i className="ri-send-plane-fill"></i>
         </div>
      </div>
     </div>

  )
}

export default Mailing
