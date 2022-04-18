import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcone from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage({ inputSearch, recomendedVideos,dark }) {
    const filter = recomendedVideos.filter((video) => {
        return video.title.toLowerCase().includes(inputSearch.toLowerCase());
    });
   
    return (
      <div className={dark ? "searchpage__dark" : "searchpage"}>
        <div className={dark ? 'searchpage__filter__dark' : "searchpage__filter"}>
          <TuneOutlinedIcone />
          <h2>FILTER</h2>
        </div>
    
        {filter.map((video) => (
          <div key={video.channel}>
            <hr />
            {console.log(video.image)}
            <VideoRow
              dark={dark}
              title={video.title}
              views={video.views}
              timestamp={video.timestamp}
              channel={video.channel}
              image={video.image}
            />
          </div>
        ))}
      </div>
    );
}

export default SearchPage;
