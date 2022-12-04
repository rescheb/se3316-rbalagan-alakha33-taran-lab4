import React from "react";

export default function Search() {
  return (
    <div className="bar">
      <div className="searchTrackTitle">
        <button className="tbtn">Search Title</button>
        <input type="text" placeholder="Enter track title" />
      </div>

      <div className="searchGenre">
        <button className="gbtn">Search genre</button>
        <input type="text" placeholder="Enter genre" />
      </div>

      <div className="searchArtist">
        <button className="gbtn">Search Artist</button>
        <input type="text" placeholder="Enter Artist Name" />
      </div>
    </div>
  );
}
