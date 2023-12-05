import React from 'react'
import vi2 from'../../image/vi2.webp'
import'../../style/youtube/Video.css'

function Video2() {
  return (
    <div>
      <div className='video-container'>
       <div className="thumbnail">
            <img src={vi2} alt="" style={{height: "100%", width: "100%"}}/>
       </div>
       <div className="video-info">
            <div className="channel-image">
                
            </div>
            <div className="channel-info">
                <h3 className="video-title">
                Operators & Binary Number System | Java Lecture 14
                   </h3>
               
                <p className='channel-name'>Apana College</p>
                <p className='view-count'> <span className="views">4.1M</span> <span className="upload-time">13 hours ago</span></p>
            </div>
       </div>
    </div>
      
    </div>
  )
}

export default Video2
