import React from "react";

export default function Search() {

    function filterTrackTitle(arr,query)
    {
        return arr.filter((el) =>
            el.track_title.toString().toLowerCase().includes(query.toString().toLowerCase()));
    }

    function filterArtistName(arr,query)
{
    return arr.filter((el) =>
        el.artist_name.toString().toLowerCase().includes(query.toString().toLowerCase()));
}







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
