import React from "react";

const VideoCard = ({ video, setCurrentVideo }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex" onClick={() => setCurrentVideo(video)}>
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={video.thumbnailUrl}
            alt="Video thumbnail"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {video.category}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {video.title}
          </a>
          <p className="mt-2 text-gray-500">{video.description}</p>
          <div className="mt-4 flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={video.author.avatarUrl}
                alt="Author's avatar"
              />
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">
                {video.author.name}
              </div>
              <div className="text-sm text-gray-500">
                {video.views} views • {video.uploadedAt}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
