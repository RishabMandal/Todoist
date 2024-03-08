"use client";

import React, { useState } from "react";
import YouTubePlayer from "./YoutubePlayer";

const VideoPlayer = ({ video }) => {
  const [currentTime, setCurrentTime] = useState(0);
  return (
    <div>
      <div>Current Prgoress Time: {currentTime} seconds</div>
      {video ? (
        <div className="relative">
          <div className="w-full aspect-w-16 aspect-h-9">
            <YouTubePlayer
              videoURL={video.videoUrl}
              setCurrentTime={setCurrentTime}
            />
          </div>
        </div>
      ) : (
        <div>No video selected</div>
      )}
    </div>
  );
};

export default VideoPlayer;
