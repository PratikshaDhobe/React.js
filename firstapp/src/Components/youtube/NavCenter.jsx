import React from 'react'
import '../../style/youtube/NavCenter.css'
function NavCenter() {
  return (
    <div className='navCenter'>
      <div className='box-icon'>
        <input className='input' type="input" name="" id="user-input" placeholder='Search'/>
       
        <div className='=search-icon'id='search'> 
        <i class="fa-solid fa-magnifying-glass fa-xl" id='searchicon'></i>
      </div>
       </div> 

      <div className='mic-icon fa-xl' id='mic'>
        <i class="fa-solid fa-microphone " id='mics'></i>
      </div>
    </div>
  )
}

export default NavCenter;
