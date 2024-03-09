"use client";

import React, { useState } from "react";
import VideoCard from "./VideoCard";
import VideoPlayer from "./VideoPlayer";

const VideoList = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the basics of React.js",
      thumbnailUrl: "https://via.placeholder.com/300",
      videoUrl: "https://www.youtube.com/watch?v=eXbVpXvkKsg",
      category: "Programming",
      author: {
        name: "John Doe",
        avatarUrl: "https://via.placeholder.com/50",
      },
      views: 1000,
      uploadedAt: "1 day ago",
    },
    {
      id: 2,
      title: "How to Make a Website with HTML & CSS",
      description: "Create your first website!",
      thumbnailUrl: "https://via.placeholder.com/300",
      videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
      category: "Web Development",
      author: {
        name: "Jane Smith",
        avatarUrl: "https://via.placeholder.com/50",
      },
      views: 500,
      uploadedAt: "3 days ago",
    },
    {
      id: 3,
      title: "How to Make a Website with HTML & CSS",
      description: "Create your first website!",
      thumbnailUrl: "https://via.placeholder.com/300",
      videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
      category: "Web Development",
      author: {
        name: "Jane Smith",
        avatarUrl: "https://via.placeholder.com/50",
      },
      views: 500,
      uploadedAt: "3 days ago",
    },
    {
      id: 4,
      title: "How to Make a Website with HTML & CSS",
      description: "Create your first website!",
      thumbnailUrl: "https://via.placeholder.com/300",
      videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
      category: "Web Development",
      author: {
        name: "Jane Smith",
        avatarUrl: "https://via.placeholder.com/50",
      },
      views: 500,
      uploadedAt: "3 days ago",
    },
    {
      id: 5,
      title: "How to Make a Website with HTML & CSS",
      description: "Create your first website!",
      thumbnailUrl: "https://via.placeholder.com/300",
      videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
      category: "Web Development",
      author: {
        name: "Jane Smith",
        avatarUrl: "https://via.placeholder.com/50",
      },
      views: 500,
      uploadedAt: "3 days ago",
    },
    {
      id: 6,
      title: "How to Make a Website with HTML & CSS",
      description: "Create your first website!",
      thumbnailUrl: "https://via.placeholder.com/300",
      videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
      category: "Web Development",
      author: {
        name: "Jane Smith",
        avatarUrl: "https://via.placeholder.com/50",
      },
      views: 500,
      uploadedAt: "3 days ago",
    },
  ]);

  const [currentVideo, setCurrentVideo] = useState(null);

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {currentVideo && (
          <div className="inline col-span-2 row-span-2">
            <VideoPlayer key={currentVideo?.id} video={currentVideo} />
          </div>
        )}
        {videos?.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            setCurrentVideo={setCurrentVideo}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
