import React, { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

const YOUTUBE_VIDEO_ID = "VhhbXrpuOEY";

const AudioPlayer = ({ isPlaying, setIsPlaying }) => {
  const playerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // Load YouTube IFrame API
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = initPlayer;
  }, []);

  const initPlayer = () => {
    playerRef.current = new window.YT.Player("youtube-player", {
      height: "0",
      width: "0",
      videoId: YOUTUBE_VIDEO_ID,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        loop: 1,
        playlist: YOUTUBE_VIDEO_ID,
      },
      events: {
        onReady: (event) => {
          setIsReady(true);
          event.target.setVolume(50);
        },
        onStateChange: (event) => {
          // Sync state when user interacts with YouTube player directly
          if (event.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
          } else if (event.data === window.YT.PlayerState.PAUSED) {
            setIsPlaying(false);
          }
        },
      },
    });
  };

  // Control YouTube player based on isPlaying prop
  useEffect(() => {
    if (!playerRef.current || !isReady) return;

    if (isPlaying) {
      playerRef.current.playVideo();
    } else {
      playerRef.current.pauseVideo();
    }
  }, [isPlaying, isReady]);

  const toggleAudio = () => {
    if (!isReady) return;
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Hidden YouTube player */}
      <div id="youtube-player" style={{ position: "absolute", width: "0", height: "0" }} />

      <button
        type="button"
        onClick={toggleAudio}
        aria-label={isPlaying ? "Matikan Musik" : "Putar Musik"}
        disabled={!isReady}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 99,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "var(--brown)",
          color: "var(--paper)",
          border: "2px solid var(--paper)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: isReady ? "pointer" : "not-allowed",
          opacity: isReady ? 1 : 0.6,
          boxShadow: "0 4px 16px rgba(46, 31, 22, 0.2)",
          transition: "all 0.3s var(--ease)",
        }}
      >
        {isPlaying ? (
          <Music
            className="w-5 h-5 animate-pulse"
            style={{ animationDuration: "2s" }}
          />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </>
  );
};

export default AudioPlayer;
