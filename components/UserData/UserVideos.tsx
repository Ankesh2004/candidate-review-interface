import React, { useRef, useState } from "react";
import user_video from "public/user_video.mp4";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import QuestionBar from "./QuestionBar";

const UserVideos = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [video, setVideo] = useState(user_video);

  const handleVideoClick = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (video.paused) {
        video.play();
        setPlaying(true);
      } else {
        video.pause();
        setPlaying(false);
      }
    }
  };

  return (
    <div className="relative w-[50%] flex flex-col items-center">
      <div className="absolute top-[40%] left-[45%] text-white">
        {playing ? (
          <PauseCircleIcon className="size-[3rem]" onClick={() => setPlaying(false)} />
        ) : (
          <PlayCircleIcon className="size-[3rem]" onClick={() => setPlaying(true)} />
        )}
      </div>
      <video
        ref={videoRef}
        width={200}
        height={200}
        src={user_video}
        onClick={handleVideoClick}
        className="rounded-xl shadow-lg"
      />
      <QuestionBar />
    </div>
  );
};

export default UserVideos;
