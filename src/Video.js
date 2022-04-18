import React from 'react'
import './Video.css'
import { Avatar } from '@material-ui/core'
function Video({image,title,channel,views,timestamp,channelImage,dark}) {
    return (
      <div className="videoCard">
        <img className="videoCard__thumbnail" src={image} alt="" />
        <div className="videoCard__info">
          <Avatar
            className="videoCard__avatar"
            src={channelImage}
            alt={channel}
          />
          <div className={dark ? "video__text__dark" : "video__text"}>
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views}.{timestamp}
            </p>
          </div>
        </div>
      </div>
    );
}

export default Video
