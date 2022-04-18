import React from 'react'
import './ChannelRow.css'
import { Avatar } from '@material-ui/core'
import  VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
function ChannelRow({ image, Channel, subs, noOfVideos, verified, description }) {
    console.log('*********');
    console.log(image);
    console.log(Channel);
    console.log(subs);
       console.log("*********");
    return (
        <div className='channelrow'>
            <Avatar className='channelrow__logo' src={image}alt=''/>
            <div className="channelrow__text">
                <h4>{Channel}{verified && <VerifiedIcon/>}</h4>
                <p>{subs} subscribes . {noOfVideos}videos</p>
                <p>
                    {description}
                </p>
                

            </div>

          
            
            
            
        </div>
    )
}

export default ChannelRow
