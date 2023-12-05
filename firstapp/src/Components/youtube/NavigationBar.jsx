import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import NavCenter from './NavCenter'
//import './Style.css';
import '../../style/youtube/NavigationBar.css'



function NavigationBar() {
  return (
    <div className='nav'>
      
      <NavLeft/>
      <NavCenter/>
      <NavRight/>
      
    </div>
  )
}

export default NavigationBar