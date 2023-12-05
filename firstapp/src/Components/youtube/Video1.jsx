import React from 'react'
import vi3 from'../../image/vi3.webp'
import'../../style/youtube/Video.css'

function Video1() {
  return (
    <div>
      <div>
      <div className='video-container'>
       <div className="thumbnail">
            <img src={vi3} alt="" style={{height: "100%", width: "100%"}}/>
       </div>
       <div className="video-info">
            <div className="channel-image">
                
            </div>
            <div className="channel-info">
                <h3 className="video-title">
                Athiran Pyaar Ka Karm | Fahadh Faasil & Sai Pallavi New Hindi Dubbed Movie 2022 | Prakash Raj
                   </h3>
               
                <p className='channel-name'>Hindi Dubbed Movie</p>
                <p className='view-count'> <span className="views">5.1M</span> <span className="upload-time">13 hours ago</span></p>
            </div>
       </div>
    </div>
      
    </div>
    </div>
  )
}

export default Video1
