import { useRef, useState } from "react";
import { phrases } from "../data";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isError, setIsError] = useState(false);
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

  const handleSpeed = (value: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = value;
    }
  };
  const handlePhraseClick = (start: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = start;
    }
  };
  const handleError = () => {
    setIsError(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <video
        ref={videoRef}
        controls
        onTimeUpdate={handleUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={handleError}
      >
        <source src="/video.mp4" type="video/mp4" />
        <track
          src="/subtitles.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      </video>
      <ul className="flex gap-8">
        {phrases.map((phrase, i) => {
          const isActive =
            currentTime >= phrase.start && currentTime < phrase.end;
          return (
            <li key={i}>
              <button
                className={isActive ? "text-emerald-600" : "text-black"}
                onClick={() => handlePhraseClick(phrase.start)}
              >
                {phrase.text}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-8 ">
        <button
          className="px-3 mt-4 cursor-pointer bg-emerald-50"
          onClick={() => handleSpeed(0.75)}
        >
          0.75x
        </button>
        <button
          className="px-3 mt-4 cursor-pointer bg-emerald-50"
          onClick={() => handleSpeed(1)}
        >
          {" "}
          1x
        </button>
        <button
          className="px-3 mt-4 cursor-pointer bg-emerald-50"
          onClick={() => handleSpeed(1.25)}
        >
          1.25x
        </button>
      </div>
      {isError && <p>Не вдалося завантажити відео</p>}
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
