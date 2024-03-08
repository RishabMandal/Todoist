"use client";

import React, { useState } from "react";
import YouTubePlayer from "./YoutubePlayer";

const VideoPlayer = ({ video }) => {
  const [currentTime, setCurrentTime] = useState(0);
  return (
    <div className={`${video ? "w-full" : "hidden"}`}>
      {video && <div>Current Progress Time: {currentTime} seconds</div>}
      {video && (
        <div className="relative">
          <div className="w-full h-[55vh]">
            <YouTubePlayer
              videoURL={video.videoUrl}
              setCurrentTime={setCurrentTime}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
