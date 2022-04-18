import React from "react";
import "./RecommendedVideoes.css";
import Video from "./Video";
function RecommendedVideoes({ recomendedVideos,dark }) {
   return (
     <div className={dark ? "recommendedvideoes__dark" : "recommendedvideoes"}>
       <h2>recommended</h2>
       <div className="recommendedvideoes__videoes">
         {recomendedVideos.map((video) => (
           <Video
             dark={dark}
             title={video.title}
             views={video.views}
             timestamp={video.timestamp}
             channelImage={video.channelImage}
             channel={video.channel}
             image={video.image}
           />
         ))}
       </div>
     </div>
   );
}

export default RecommendedVideoes;
