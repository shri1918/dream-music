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
      "https://s3-alpha-sig.figma.com/img/fab5/7d37/dac780b3d02d707441f0334cbb22d318?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E3fEUbMoqFgbIzQu6pIxucSkQ3vy8nu3ayVQcP7E~GOvkqIRCEavZ0YhwP3DJHtwvmxENobs37iQDfZ~T8YolIdGT0oIb8zIuyVksROJUrAvuVMD9cgmAsWv6~RNPbgqx96SQJUKfpBUuB2Kg0OmGSfT~hhkcK3YmVaVgf-9W7knYi4LbPUxkeOxwLM~q3atQqXIu3UYX7eYLWZmgP~XcuNjbuiRyVo2O1H60Xt2jhSxmhhDO76J-LKP1hrr7q~e8XRjjRV~R5lvOwLfiZq6rcBeqPfhGtKCS363Pkqt4aIxkk-Xshm-EiRWTpjaP2UazfMGhOW3OkWC2zdf4Yr7Hw__",
    songUrl: "/assets/songs/BillieJean.mp3",
  },
  {
    id: 2,
    title: "Beat It",
    playCount: "643,786,045",
    time: "4:18",
    album: "Thriller 25",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/b185/465f/8a5d6c233b76e53e0eea65bc21738d6b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C7FwY75l7T6tQjgdiJrSVe69Cs0G3~TAXWysxtDJmoLRRds8Wm~0Np~Ik-zVj9T-JQvQ89GmUmOXYaMbjMVQxVMfJI699GKtt2hF2mtp5xDfAxSMZkd7to4c1zX5~Fmzpot4sZTbtNp8Zgjhke~yiD9gyoIb3xzaOFtN2fPoCvx-VIvG7S--ssHkzOC2g1hZ6bPVe00YAQJRS~haXwjSg8Va6XrCOcQK3WjTptvr7pZyLbCS7tnOPaB~zmcyXf7JXNj2wxwo4LkPVwBhe15kPR4gWQUwjRgD705t3qkQVdpPK0kIQPjEGZ~qq92m6x2aIhsr73M6se6i1wlcpGeqQA__",
      songUrl: "/assets/songs/BeatIt.mp3",
  },
  {
      id: 3,
      title: "Smooth Criminal - 2012 Rema...",
      playCount: "407.234.004",
      time: "4:18",
      album: "Thriller 25",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/b185/465f/8a5d6c233b76e53e0eea65bc21738d6b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C7FwY75l7T6tQjgdiJrSVe69Cs0G3~TAXWysxtDJmoLRRds8Wm~0Np~Ik-zVj9T-JQvQ89GmUmOXYaMbjMVQxVMfJI699GKtt2hF2mtp5xDfAxSMZkd7to4c1zX5~Fmzpot4sZTbtNp8Zgjhke~yiD9gyoIb3xzaOFtN2fPoCvx-VIvG7S--ssHkzOC2g1hZ6bPVe00YAQJRS~haXwjSg8Va6XrCOcQK3WjTptvr7pZyLbCS7tnOPaB~zmcyXf7JXNj2wxwo4LkPVwBhe15kPR4gWQUwjRgD705t3qkQVdpPK0kIQPjEGZ~qq92m6x2aIhsr73M6se6i1wlcpGeqQA__",
        songUrl: "/assets/songs/SmoothCriminal.mp3",
    },
    {
      id: 4,
      title: "Don't Stop 'Til You Get Enough",
      playCount: "316.391.952",
      time: "4:18",
      album: "Thriller 25",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0125/de17/5e419f447d656fefcf56c79444973408?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g~-CPR1Yx0PmwRv09AFgeEnvJlc8jSz7le-9mYgElk-qvoh8QluuitopPItCn7-EXlyNhsLEof0QprSBztlEL9B8NZK5XoAY0WkXqTR2-PoqgvGBqxKwDbCfOohpK3bj5VFqjxv0m6YNGXpWQ-dk71JSMDS5Xmc0NMKwizCRpEaFlfOnKnf7XlhbYG8e8xvmcvDm6Ppi1tL30dBHUu0PPwD5fKf-hzAS2on6a0pxGkg4TgAWhBTPPfkh4b36NbaQ5T0S~Hd51Agz1G59C7i0xlN-50XBJvznwIMqErcAXforikCkZRJKLdcWA0T4kIX56IgV2g-pYH~lkA53xz-tNg__",
        songUrl: "/assets/songs/DontStopTilYouGetEnough.mp3",
    },
    {
      id: 5,
      title: "Rock with You - Single Version",
      playCount: "268.187.218",
      time: "4:18",
      album: "Thriller 25",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0125/de17/5e419f447d656fefcf56c79444973408?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g~-CPR1Yx0PmwRv09AFgeEnvJlc8jSz7le-9mYgElk-qvoh8QluuitopPItCn7-EXlyNhsLEof0QprSBztlEL9B8NZK5XoAY0WkXqTR2-PoqgvGBqxKwDbCfOohpK3bj5VFqjxv0m6YNGXpWQ-dk71JSMDS5Xmc0NMKwizCRpEaFlfOnKnf7XlhbYG8e8xvmcvDm6Ppi1tL30dBHUu0PPwD5fKf-hzAS2on6a0pxGkg4TgAWhBTPPfkh4b36NbaQ5T0S~Hd51Agz1G59C7i0xlN-50XBJvznwIMqErcAXforikCkZRJKLdcWA0T4kIX56IgV2g-pYH~lkA53xz-tNg__",
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
        <div className="w-full bg-gradient-to-b from-[#490000] to-black overflow-y-auto hide-scrollbar">
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
        <div className="flex w-1/3  bg-[#230a0a] flex-col h-screen"> {/* Set parent to flex container with full height */}
  {/* Other content can go here */}
  
  <div className=" p-4 bg-[#230a0a] mt-auto"> {/* Use mt-auto to push this div to the bottom */}
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
