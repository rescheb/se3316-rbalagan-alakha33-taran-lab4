import axios from "axios";
import Search from "./Search";
import { useEffect, useState } from "react";
import "./App.css";

export default function Playlist() {
  //fetch recent playlist from backend server side
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

  //defining songs variable and handle songs
  //fetch track details from backend server side

  const [songs, setSongs] = useState([]);

  const handleSongs = async () => {
    for (let h = 0; h < songs.length; h++) {}
    fetch("http://localhost:9000/playlist/filterTrack?trackName=", {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then((res) => res.json())
      .then((data) => {
        //  setResults(data);
        console.log(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(data)
  };

  //providing sturtures to the page using HTML ccommands
  return (
    <div>
      <h1>Public Playlist</h1>
      <div className="playlistSearch">
        <Search />

        <div className="review">
          <button onClick={editPlaylist} className="ebtn">
            Edit Playlist
          </button>
          <input
            type="text"
            placeholder="Enter Playlist Name to Edit"
            required
            value={title2}
            onChange={(e) => setTitle2(e.target.value)}
          />
          <input
            type="text"
            placeholder="Songs"
            required
            value={song2}
            onChange={(e) => setSong2(e.target.value)}
          />
          <input
            type="checkbox"
            required
            checked={ispublic2}
            onChange={(e) => setIsPublic2(e.target.checked)}
          />
          ispublic
        </div>

        {/* using map to  store title, username, song name  */}
        {recentPlaylists.length != 0
          ? recentPlaylists.map((playlist) => (
              <div>
                <ul>
                  <li>
                    {" "}
                    {playlist.title +
                      " by: " +
                      playlist.username +
                      " #tracks: " +
                      playlist.song.split(",").length}{" "}
                    {/* {setSongs(playlist.song.split(","))} */}
                  </li>
                  {/* <li> {playlist.title} </li>
                      <li> {playlist.song} </li>
                      <li> {playlist.username} </li>
                      <li> {playlist.ispublic} </li>
                      <li> {playlist.createdAt} </li>
                      <li> {playlist.updatedAt} </li> */}
                </ul>
                <br></br>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
