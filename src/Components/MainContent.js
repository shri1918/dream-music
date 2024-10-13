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
    <div className="p-8 text-white flex-1 bg-gradient-to-b from-[#490000] to-black">
      <div className="relative mb-8 flex justify-center mt-40">
        <img
          src="https://s3-alpha-sig.figma.com/img/27d6/181f/b614afab3396f4c60bfa19b926b4b71d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RBfCmQwtAkwm56MnBnwpU7PbZhUUHBNzijW-Y9jINNOVK4~j8idG4sNxTgH8KybxV~xVRQCd108Q9sQphfeQ3yxZCKYBxmGAuyo4fCEfY8F86hMrwskXaPMKxWDVA4ghFUK7Ynw3ODONjrncGYwxEmv~fwBr0tWvrUorYmdw~~ecxnXafnphBB2YOC~qOjoSUCKFocpHrRC9gc1DY3cEFHgHAOUM5Ny7otMMlHhaINqfwiGSihxpUqDXDdEI51mOzwQOaeJTv3OIPcMTfgzkwM5UeS9HuAKY7Qs8~n0IC6SsuD0BGopa7o-n2PUlWtoEOSpjzBT528hU-V2mRHmkPg__"
          alt="Michael Jackson"
          className="w-[900px] h-56 object-cover rounded-3xl"
        />
        <div className="absolute left-10 inset-0 bg-black opacity-50 rounded-3xl"></div>
        <div className="absolute top-1/2 left-32 transform -translate-y-1/2">
          <h1 className="text-4xl font-bold">Michael Jackson</h1>
          <p className="text-lg">27,852,501 monthly listeners</p>
        </div>

        <div className="absolute top-5 right-16 transform -translate-y-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/228e/160e/5d55e4ce985c98f27a2e4560589055d1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8aKtSNaNDTaLGbE2G2rBahP8yaHhK-VdqmgH1A5upxolZRVNlEG5JglV8rfCvEBxinRnw5K-tHc5cZuPE~-QuivVaqgwnguLiiD7HSXG4uH563R1tHDtteVcj0dP1U3aNr2bq~TbLI4n0aCXrv5q-7WS9Q9nn-JfmL5q-sassNtGTT-Cyx~gpUioN7ZrADTsi1DlPfR8i5ur97YEDpfN0sx7r9wK~z7wtvgKU82oEZj7S8WiKj61LCmL2ctxDc7FUOhjsb7UYPGYDHHdlERzeDA3MIyLOmYHMl~nmjzVBsOV0-UFcqy8CCky9yJI00gDCldpgIse1NEr2kbbR1CmQ__"
            alt="Another Image"
            className="h-96 object-cover rounded-lg"
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
                      <div className="flex space-x-4 items-center w-96">
                        <img
                          src={song.imageUrl}
                          alt={song.title}
                          className="w-12 h-12 rounded-md"
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
