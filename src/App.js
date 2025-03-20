import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import NowPlaying from "./Components/NowPlaying";

const songsData = [
  {
    id: 1,
    title: "Billie Jean",
    playCount: "1,040,811,084",
    time: "4:53",
    album: "Thriller 25",
    imageUrl:
      "/Pic.png",
    songUrl: "/assets/songs/BillieJean.mp3",
  },
  {
    id: 2,
    title: "Beat It",
    playCount: "643,786,045",
    time: "4:18",
    album: "Thriller 25",
    imageUrl:
      "2.png",
      songUrl: "/assets/songs/BeatIt.mp3",
  },
  {
      id: 3,
      title: "Smooth Criminal - 2012 Rema...",
      playCount: "407.234.004",
      time: "4:18",
      album: "Thriller 25",
      imageUrl:
        "5.png",
        songUrl: "/assets/songs/SmoothCriminal.mp3",
    },
    {
      id: 4,
      title: "Don't Stop 'Til You Get Enough",
      playCount: "316.391.952",
      time: "4:18",
      album: "Thriller 25",
      imageUrl:
        "3.png",
        songUrl: "/assets/songs/DontStopTilYouGetEnough.mp3",
    },
    {
      id: 5,
      title: "Rock with You - Single Version",
      playCount: "268.187.218",
      time: "4:18",
      album: "Thriller 25",
      imageUrl:
        "2.png",
        songUrl: "/assets/songs/RockWithYou.mp3",
    },

];

function App() {
  const [songList, setSongList] = useState(songsData);
  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Update song list after drag-and-drop reordering
  const updateSongList = (newSongList) => {
    setSongList(newSongList);
  };

  const handleSongEnd = () => {
    const currentIndex = songList.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songList.length;
    setCurrentSong(songList[nextIndex]);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex">
        <div className="bg-gradient-to-b w-full from-[#490000] hide-scrollbar overflow-y-auto to-black">
          <Header  className="fixed"/>
          <MainContent
        songs={songList}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        updateSongList={updateSongList}  // Pass down the state update function
      />
        </div>
        <div className="flex flex-col bg-[#230a0a] h-screen w-1/3"> {/* Set parent to flex container with full height */}
  {/* Other content can go here */}
  
  <div className="bg-[#230a0a] p-4 mt-auto"> {/* Use mt-auto to push this div to the bottom */}
  <NowPlaying
        currentSong={currentSong}
        isPlaying={isPlaying}
        songList={songList}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
        onSongEnd={handleSongEnd}
      />
  </div>
</div>
      </div>
    </div>
  );
}

export default App;
