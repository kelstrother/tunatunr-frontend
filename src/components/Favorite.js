import React from "react";

const Favorite = (props) => {
  console.log("pooooop", props);
  const filteredFavorite = props.songs
    .filter((song) => {
      return song.favorite;
    })
    .map((song, index) => {
      return <div>{song.name}</div>;
    });
  console.log(filteredFavorite);
  return (
    <div className="favorite-container">
      <div className="inner-container">
        {props.songs
          .filter((song) => {
            return song.favorite;
          })
          .map((song, index) => {
            return (
              <div className="song-container" key={index}>
                <div className="song-title">{song.name}</div>
                <div className="song-artist">{song.artist}</div>
                <div className="song-album">{song.album}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Favorite;
