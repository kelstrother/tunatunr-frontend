import "./App.css";
import React from "react";
import axios from "axios";

import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  // Url variable
  // const url = "https://tunatunr.herokuapp.com";
  const url = "https://tuna-tunr-api.herokuapp.com/";

  // States
  const [songs, setSongs] = React.useState([]);
  const [favoritedSong, setFavoritedSong] = React.useState([]);

  // Empty API
  const emptySong = {
    name: "",
    artist: "",
    album: "",
  };

  // Function to get list of songs
  const getSongs = () => {
    axios.get(url + "/tunatunr").then((response) => {
      setSongs(response.data);
    });
  };

  const handleCreate = (song) => {
    axios.post(url + "/tunatunr", song).then(() => {
      getSongs();
    });
  };

  const handleDelete = (song) => {
    axios.delete(url + "/tunatunr/id/" + song._id).then(() => {
      getSongs();
    });
  };

  const handleFavorite = (song) => {
    setFavoritedSong({ ...favoritedSong }, song);
  };

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
      <Form
        song={emptySong}
        handleSubmit={handleCreate}
        favoritedSong={favoritedSong}
      />
    </div>
  );
}

export default App;
