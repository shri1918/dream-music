import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

const MainContent = ({ songs, currentSong, setCurrentSong, isPlaying, setIsPlaying }) => {
  const [songList, setSongList] = useState(songs);

  const handlePlaySong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  // Handle drag end
  const handleDragEnd = (result) => {
    // If there's no destination (e.g., dropped outside), do nothing
    if (!result.destination) return;

    // Reorder the songs array based on the drag result
    const reorderedSongs = Array.from(songList);
    const [removed] = reorderedSongs.splice(result.source.index, 1);
    reorderedSongs.splice(result.destination.index, 0, removed);

    setSongList(reorderedSongs);
  };

  return (
    <div className="flex-1 bg-gradient-to-b p-8 text-white from-[#490000] to-black">
      <div className="flex justify-center mb-8 mt-40 relative">
        <img
          src="/Background.png"
          alt="Michael Jackson"
          className="h-56 rounded-3xl w-[900px] object-cover"
        />
        <div className="bg-black rounded-3xl absolute inset-0 left-10 opacity-50"></div>
        <div className="-translate-y-1/2 absolute left-32 top-1/2 transform">
          <h1 className="text-4xl font-bold">Michael Jackson</h1>
          <p className="text-lg">27,852,501 monthly listeners</p>
        </div>

        <div className="-translate-y-1/2 absolute right-16 top-5 transform">
          <img
            src="/Michael.png"
            alt="Another Image"
            className="h-96 rounded-lg object-cover"
          />
        </div>
      </div>

      <h2 className="text-2xl mb-4">Popular</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="songs">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {songList.map((song, index) => (
                <Draggable key={song.id} draggableId={String(song.id)} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps} // Add this line
                      className={`flex justify-between items-center p-4 rounded-lg ${
                        currentSong.id === song.id && isPlaying
                          ? "bg-[#520000]"
                          : "bg-transparent"
                      }`}
                      onClick={() => handlePlaySong(song)}
                      style={{
                        ...provided.draggableProps.style,
                        cursor: snapshot.isDragging ? "grabbing" : "grab",
                      }}
                    >
                      {/* Move Icon */}
                      {currentSong.id === song.id && isPlaying ? (
                        <AudiotrackIcon sx={{color:'#f94646', fontSize: '42px'}}/>
                      ) : (
                        <span>{index + 1}</span>
                      )}
                      <div className="flex w-96 items-center space-x-4">
                        <img
                          src={song.imageUrl}
                          alt={song.title}
                          className="h-12 rounded-md w-12"
                        />
                        <span className="text-left">{song.title} </span>
                      </div>
                      <span>{song.playCount}</span>
                      <span>{song.time}</span>
                      <span>{song.album}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default MainContent;
