import React from 'react'
import'../../style/youtube/NavRight.css'
function NavRight() {
  return (
    <div className='navRight'>
      <div className='right line'>
      <i class="fa-solid fa-ellipsis-vertical fa-xl" id='lines'></i>
      </div>
     
      
      <div className='right button'>
        <button className='signin-btn'>
        <i class="fa-solid fa-user fa-xl"></i>
          Sign in
        </button>
      </div>
      
    </div>
  )
}

export default NavRight;
