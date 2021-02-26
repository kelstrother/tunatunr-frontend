import "./App.css";
import React from "react";
import axios from "axios";

import Display from "./components/Display";
import Favorite from "./components/Favorite";
import Form from "./components/Form";

function App() {
  // Url variable
  // const url = "https://tunatunr.herokuapp.com";
  const url = "https://ks-tunatunr.herokuapp.com";

  // State that hold the songs
  const [songs, setSongs] = React.useState([]);

  // Empty API
  const emptySong = {
    title: "",
    artist: "",
    album: "",
    favorite: false,
  };

  // Function to get list of songs
  const getSongs = () => {
    axios.get(url + "/songs").then((response) => {
      setSongs(response.data);
    });
  };

  const handleCreate = (song) => {
    axios.post(url + "/songs", song).then(() => {
      getSongs();
    });
  };

  const handleFavorite = (song) => {
    console.log(song)
    if (song.favorite) {
      axios
        .put(url + "/songs/" + song.id, { favorite: false })
        .then(() => {
          getSongs();
        });
    } else {
      axios
        .put(url + "/songs/" + song.id, { favorite: true })
        .then(() => {
          getSongs();
        });
    }
  };

  const handleDelete = (song) => {
    axios.delete(url + "/songs/" + song.id).then(() => {
      getSongs();
    });
  };

  // const handleFavorite = (song) => {
  //   setFavoritedSong({ ...favoritedSong }, song);
  // };

  React.useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className="App">
      <Display
        songs={songs}
        handleDelete={handleDelete}
        handleFavorite={handleFavorite}
      />
      <div className="bottom-container">
        <Favorite songs={songs} />
        <Form song={emptySong} handleSubmit={handleCreate} />
      </div>
    </div>
  );
}

export default App;
