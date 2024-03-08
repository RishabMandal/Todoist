import { useEffect, useRef } from "react";

const YouTubePlayer = ({ videoURL, setCurrentTime }) => {
  function getVideoIdFromUrl(url) {
    const regex = /[?&]v=([^&#]+)/;
    const match = url.match(regex);
    return match && match[1];
  }

  const videoId = getVideoIdFromUrl(videoURL);

  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current) return;

    const onYouTubeIframeAPIReady = () => {
      new YT.Player(playerRef.current, {
        height: "315",
        width: "560",
        videoId: videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }
  }, [videoId]);

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setInterval(() => {
        setCurrentTime(event.target.getCurrentTime());
      }, 1000); // Set current time every second
    }
  };

  return <div ref={playerRef}></div>;
};

export default YouTubePlayer;
