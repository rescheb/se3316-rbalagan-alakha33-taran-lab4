import React from 'react'
import { useEffect, useState } from "react";
import {useRef} from 'react'
import {useAuth} from '../contexts/AuthContext'
import Search from "./Search";
const name = require('./SignUp.js');


export default function PrivatePlaylist() 
{
  //currentUser.email.split('@')[0]
    
    
  const{currentUser} = useAuth()
    const [username, setUsername] = useState([]);
    const [recentPlaylists, setRecentPlaylists] = useState([]);

    
     
      


   


    const viewPlaylists = async () => {
      
      fetch("http://localhost:9000/playlist/privatePlaylists?email="+currentUser.email, {
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
      

  

  
    
    
    const createPlaylist = async () => {
      fetch("http://localhost:9000/playlist/emailusername?name1="+currentUser.email, {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" }),
      })
        .then((res) => res.json())
        .then((data2) => {
          setUsername(data2);
          console.log(JSON.stringify(data2));


          console.log("Entered")
          fetch("http://" + window.location.hostname + ':9000/playlist/playlist', {method: "POST", body: JSON.stringify({"title": title, "songs": song, "username": data2[0].username, "email":currentUser.email, "public": ispublic}), headers: new Headers({'Content-Type': 'application/json'})})
          .then(res => res.json())
          .then(data => {
              
          })
          .catch(err => {
              console.log(err)
          })



        })
        .catch((err) => {
          console.log(err);
        });

     

  };






const [title, setTitle] = useState('');
const [song, setSong] = useState('');
const [ispublic, setIsPublic] = useState('');



  return (
    <div>
        <div className = "createPlaylist" >
        <button onClick={createPlaylist} className="cpbtn">Create Playlist</button>
        <input type="text" placeholder="Enter Playlist Name" required value={title} onChange={(e) => setTitle(e.target.value)}/>  
        <input type="checkbox" required checked={ispublic} onChange={(e) => setIsPublic(e.target.checked)}/>ispublic
        <br></br>
        <input type="text" placeholder="Enter Songs" required value={song} onChange={(e) => setSong(e.target.value)}/>
        </div>
        

        <Search/>

        <button onClick={viewPlaylists} className="vbtn">View Playlist</button>





        {recentPlaylists.length != 0 ? recentPlaylists.map((playlist) => (
            <div>
              <ul>
                <li>
                  {" "}
                  {playlist.title +" by: " +playlist.username +" #tracks: " +playlist.song.split(",").length}{" "}
                  

                </li>
            
              </ul>
              <br></br>
            </div>
          )): null}

    </div>
  )
}