import React from 'react'
import './VideoRow.css'
function VideoRow({
   views,subs,description,timestamp,title,image,Channel,dark
}) {
 
   
    return (
      <div className="videorow">
        <img src={`.${image}`} alt="" />
        <div className={dark ? "videorow__text__dark" : "videorow__text"}>
          <h3> {title}</h3>
          <p className={dark ? "videorow__headline__dark" : "videorow__headline"}>
            {Channel} .
            <span className="videorow__subs">
              <span className="videorow__subsNumber">{subs}</span> Subscribers
            </span>{" "}
            {views} views . {timestamp}
          </p>
        </div>
      </div>
    );
}

export default VideoRow

