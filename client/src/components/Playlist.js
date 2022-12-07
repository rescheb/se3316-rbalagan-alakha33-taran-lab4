import axios from "axios";
import Search from "./Search";
import { useEffect, useState } from "react";
import "./App.css";

export default function Playlist() {

  const [recentPlaylists, setRecentPlaylists] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/playlist/recentPlaylists", {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRecentPlaylists(data);
        console.log(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [songs, setSongs] = useState([]);

  const handleSongs = async () => {
    for (let h = 0; h < songs.length; h++) {

    }
    fetch("http://localhost:9000/playlist/filterTrack?trackName=", { method: "GET", headers: new Headers({ 'Content-Type': 'application/json' }) })
      .then(res => res.json())
      .then(data => {
        //  setResults(data);
        console.log(JSON.stringify(data));
      })
      .catch(err => { console.log(err) })
    // console.log(data)

  };


  return (
    <div>
    <h1>Public Playlist</h1>
    <div className="playlistSearch">
      <Search />

      {recentPlaylists.length != 0
        ? recentPlaylists.map((playlist) => (
          <div>
            <ul>
              <li>
                {" "}
                {playlist.title +" by: " +playlist.username +" #tracks: " +playlist.song.split(",").length}{" "}

              </li>
             
            </ul>
            <br></br>
          </div>
        ))
        : null}
    </div>
  </div>
    
  );
}