import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";

const NowPlaying = ({ currentSong, isPlaying,songList, setIsPlaying, onSongEnd,setCurrentSong }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  useEffect(() => {
    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      }
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkip = () => {
    const currentIndex = songList.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songList.length;
    setCurrentSong(songList[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = songList.findIndex((song) => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songList.length) % songList.length;
    setCurrentSong(songList[prevIndex]);
  };

  return (
    <div className="p-2 md:p-4 bg-red-800 text-white rounded-lg">
      <h2 className="text-base md:text-lg mb-2 text-center">Now Playing</h2>
      <img src={currentSong.imageUrl} alt={currentSong.title} className="w-full md:w-96 rounded-lg mb-2" />
      <h3 className="text-lg md:text-xl font-bold text-center">{currentSong.title}</h3>
      <p className="text-xs md:text-sm text-center">{currentSong.album}</p>
      <div className="flex items-center justify-between mt-3 md:mt-4">
        <span className="text-sm md:text-base">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => setCurrentTime(e.target.value)}
          className="w-full mx-2"
        />
        <span className="text-sm md:text-base">{formatTime(duration)}</span>
      </div>
      <div className="flex justify-between mt-3 md:mt-4">
        <button onClick={handlePrev} className="p-2 hover:bg-red-700 rounded-full">
          <FaStepBackward className="text-white text-lg md:text-xl" />
        </button>
        <button onClick={handlePlayPause} className="p-2 hover:bg-red-700 rounded-full">
          {isPlaying ? (
            <FaPause className="text-white text-lg md:text-xl" />
          ) : (
            <FaPlay className="text-white text-lg md:text-xl" />
          )}
        </button>
        <button onClick={handleSkip} className="p-2 hover:bg-red-700 rounded-full">
          <FaStepForward className="text-white text-lg md:text-xl" />
        </button>
      </div>
      <audio
        ref={audioRef}
        src={currentSong.songUrl}
        onEnded={onSongEnd}
      />
    </div>
  );
};

// Helper function to format time from seconds to mm:ss
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
};

export default NowPlaying;
