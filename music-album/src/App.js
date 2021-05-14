import React from "react";
import Album from "./Components/Album/Album";
import album from "./Components/Album/AlbumData";
function App() {
  return (
    <>
      <div className="container">
        <div className="albums">
          <h1 className="album-heading">Albums</h1>
          {album.map((value) => {
            return (
              <Album
                key={value.id}
                albumCover={value.albumCover}
                albumTitle={value.albumTitle}
                artist={value.artist}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
