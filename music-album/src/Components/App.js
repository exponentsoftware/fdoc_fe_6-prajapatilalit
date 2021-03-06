import React, { Component } from "react";
import Albums from "./Albums";

class App extends Component {
  state = {
    albums: [
      {
        id: 0,
        artist: "A.R.Rehman",
        album: "Rockstar",
        albumCover:
          "https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/Rockstar-Poster-Feature-306x393.jpg",
        songs: "",
      },
      {
        id: 1,
        artist: "Rihana",
        album: "Diamond",
        albumCover:
          "https://static-musique.qub.ca/images/covers/20/61/0060253726120_max.jpg",
        songs: "",
      },
      {
        id: 2,
        artist: "A.R. Rahman",
        album: "Jodha Akbar",
        albumCover:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHiFZH8kKxbCZRbElcmmW1py65EmiqpqWk6LBEuEH76kII_xcx",
        songs: "",
      },
      {
        id: 3,
        artist: "A.R. Rahman",
        album: "Highway",
        albumCover:
          "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/highway-et00014920-17-06-2020-12-28-06.jpg",
        songs: "",
      },
      {
        id: 4,
        artist: "A.R. Rahman",
        album: "Ranjhana",
        albumCover: "https://i.ytimg.com/vi/lfmYmTpIH4o/movieposter.jpg",
        songs: "",
      },
      {
        id: 5,
        artist: "A.R. Rahman",
        album: "Ghajni",
        albumCover: "https://flxt.tmsimg.com/assets/p191083_p_v10_ab.jpg",
        songs: "",
      },
    ],
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="albums">
            <h1 className="album-heading">Albums</h1>
            <Albums albums={this.state.albums} artist={this.state.artist} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
