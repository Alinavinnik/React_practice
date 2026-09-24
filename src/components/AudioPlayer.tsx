const AudioPlayer = () => {
  return (
    <div className=" flex justify-center ">
      <audio controls>
        <source src="/audio.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
