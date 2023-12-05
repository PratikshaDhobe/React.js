import React from 'react'
import vi1 from'../../image/vi1.webp'
import'../../style/youtube/Video.css'


function Video() {
  return (
    
      <div className='video-container'>
       <div className="thumbnail">
            <img src={vi1} alt="" style={{height: "100%", width: "100%"}}/>
       </div>
       <div className="video-info">
            <div className="channel-image">
                
            </div>
            <div className="channel-info">
                <h3 className="video-title">
                   Complete React course with projects
                   </h3>
               
                <p className='channel-name'>Chai Aur Code</p>
                <p className='view-count'> <span className="views">1.1M</span> <span className="upload-time">13 hours ago</span></p>
            </div>
       </div>
    </div>
      
    
  )
}

export default Video

