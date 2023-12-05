import React from 'react'
import '../../style/youtube/NavLeft.css'

function NavLeft() {
  return (
    <div className='navleft'>
      
      <div className='menuBar'>
      <i class="fa-solid fa-bars fa-xl" id='menuss'></i>
      </div>
      
      <div className='youtube-logo'>
      <span className='youtube-icon'><i class="fa-brands fa-youtube fa-xl"></i></span>
      <span className='logo-text' id='youtube'>YouTube</span>
      </div>


</div>
  )
}


export default NavLeft
