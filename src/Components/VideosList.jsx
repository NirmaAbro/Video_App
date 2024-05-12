import React from "react";
import Data from "../Data/Data";
import Videos from "./Videos";
import PlayButton from "./PlayButton";
// ya functionality ka part ha 

function VideosList({children}) {
  return (
    <div className="flex flex-wrap border-4 border-black">
      {Data.map((video, index) => {
        return (
          <Videos
            className="border-3 border-black flex-wrap p-4 m-4 "
            key={index}
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            verified={video.verified}
            id={video.id}
          >
            {/* children props  */}
           <PlayButton onPlay={ ()=>{ console.log(" play button ")}}  onPause={ ()=>{ console.log("pause button ")}}>{video.title}</PlayButton>
          
          </Videos>
        );
      })}
    </div>
  );
}

export default VideosList;
