import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlay = () => videoRef.current?.play();
  const handleStop = () => videoRef.current?.pause();

  const handleMinus = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        0,
        (videoRef.current.currentTime -= 10),
      );
    }
  };
  const handlePlus = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      videoRef.current.currentTime = Math.min(
        duration,
        (videoRef.current.currentTime += 10),
      );
    }
  };
  const handleUpdate = () => {
    if (videoRef.current) {
      const time = Math.floor(videoRef.current.currentTime);
      setCurrentTime(time);
    }
  };
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const duration = Math.round(videoRef.current.duration);
      setDuration(duration);
    }
  };
  const handleEnded = () => {
    if (videoRef.current) {
      console.log("Video ended");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <video
        ref={videoRef}
        controls
        onTimeUpdate={handleUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <p>
        Current time: {currentTime} / Total duration:{duration}
      </p>
      <div className="flex gap-28 m-3">
        <button
          className="py-2 w-30 rounded-2xl bg-green-200 cursor-pointer"
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="py-2 w-30 rounded-2xl bg-red-400 cursor-pointer"
          onClick={handleStop}
        >
          Pause
        </button>
      </div>
      <div className="flex gap-28">
        <button
          className="w-30 py-2 bg-blue-200 rounded-2xl cursor-pointer"
          onClick={handleMinus}
        >
          -10 sec
        </button>
        <button
          className=" py-2 w-30 bg-yellow-100 rounded-2xl cursor-pointer"
          onClick={handlePlus}
        >
          +10 sec
        </button>
      </div>
    </div>
  );
}
