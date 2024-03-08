import React from "react";

const VideoPlayer = ({ video }) => {
  return (
    <div>
      {video ? (
        <div className="relative">
          <div className="w-full aspect-w-16 aspect-h-9">
            <iframe
              className="absolute top-0 left-0 w-[90vw] h-[90vh] rounded-xl"
              src={video.videoUrl}
              title={video.title}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <div>No video selected</div>
      )}
    </div>
  );
};

export default VideoPlayer;
