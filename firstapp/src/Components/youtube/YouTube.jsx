import React from 'react'; 
import NavigationBar from './NavigationBar.jsx'
 import AllVideos from './AllVideos.jsx';




function YouTube() {
  return (
    <div style={{backgroundColor: "black", color:"white", padding: "0 20px"}}>
        <NavigationBar />
         <AllVideos/> 
        
    </div>
  )
}

export default YouTube
