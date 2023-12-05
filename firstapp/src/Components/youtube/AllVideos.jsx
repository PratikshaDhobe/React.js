import React from 'react'
import Video from './Video'
import Video1 from './Video1'
import Video2 from './Video2'

function AllVideos() {

    const allVideoStyle = {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "10px"
    }


  return (
    <div style={allVideoStyle}>
        <Video />
        <Video1 />
        <Video2 />
        <Video1 />
        <Video2 />
        <Video />
     
       
    </div>
  )
}

export default AllVideos
