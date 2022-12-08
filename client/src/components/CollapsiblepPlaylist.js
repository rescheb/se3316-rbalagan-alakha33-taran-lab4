import React from 'react'
import { useEffect, useState } from "react";
import { useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function CollapsiblepPlaylist() {

    const [recentPlaylists, setRecentPlaylists] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const { currentUser } = useAuth()




    const viewPlaylists = async () => {


        fetch("http://localhost:9000/playlist/privatePlaylists?email=" + currentUser.email, {
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
      }
    





  return (
    <div>
    <button onClick={viewPlaylists} className="vbtn">View Playlist</button>
      {recentPlaylists.length != 0
        ? recentPlaylists.map((playlist) => (
            <div className="playlistSearch">
              <br></br>
              <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
                {playlist.title +
                  " by: " +
                  playlist.username +
                  " #tracks: " +
                  playlist.song.split(",").length}
              </button>
              {isOpen && <div className="content">other stuff</div>}
            </div>
          ))
        : null}
    </div>
  )
}
