import React from "react";
import Album from "./Components/Album/Album";
function App() {
  return (
    <>
      <div className="container">
        <div className="albums">
          <h1 className="album-heading">Albums</h1>
          <Album
            album_cover="https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/Rockstar-Poster-Feature-306x393.jpg"
            album_title="Rockstar"
            artist="A.R. Rehman"
          />
          <Album
            album_cover="https://static-musique.qub.ca/images/covers/20/61/0060253726120_max.jpg"
            album_title="Diamond"
            artist="Rihana"
          />
          <Album
            album_cover="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHiFZH8kKxbCZRbElcmmW1py65EmiqpqWk6LBEuEH76kII_xcx"
            album_title="Jodha Akbar"
            artist="A.R. Rehman"
          />
          <Album
            album_cover="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/highway-et00014920-17-06-2020-12-28-06.jpg"
            album_title="Highway"
            artist="A.R. Rehman"
          />
          <Album
            album_cover="https://i.ytimg.com/vi/lfmYmTpIH4o/movieposter.jpg"
            album_title="Ranjhana"
            artist="A.R. Rehman"
          />
          <Album
            album_cover="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAY3NEEcdyk9xbinmK_PgI0zX5otw3-xkTmvvDHSHoN1Q6MrYk"
            album_title="Dil Bechara"
            artist="A.R. Rehman"
          />
        </div>
      </div>
    </>
  );
}

export default App;
