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
      if(title!="" && song!="")
      {
        let pub;
        if(ispublic==true)
        {
          pub=1;
        }
        else
        {
          pub=0;
        }

      fetch("http://localhost:9000/playlist/emailusername?name1="+currentUser.email, {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" }),
      })
        .then((res) => res.json())
        .then((data2) => {
          setUsername(data2);
          console.log(JSON.stringify(data2));


          console.log("Entered")
          fetch("http://" + window.location.hostname + ':9000/playlist/playlist', {method: "POST", body: JSON.stringify({"title": title, "songs": song, "username": data2[0].username, "email":currentUser.email, "public":pub}), headers: new Headers({'Content-Type': 'application/json'})})
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

      }

  };

  const editPlaylist = async () => {
    let pub;
    if(title2!="" && song2!="")
    {
      if(ispublic2==true)
      {
        pub=1;
      }
      else
      {
        pub=0;
      }

    fetch("http://localhost:9000/playlist/emailusername?name1="+currentUser.email, {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then((res) => res.json())
      .then((data2) => {
        setUsername(data2);
        console.log(JSON.stringify(data2));


        console.log(ispublic2)
        fetch("http://" + window.location.hostname + ':9000/playlist/editPlaylist', {method: "POST", body: JSON.stringify({"song": song2,"ispublic":pub, "title": title2, "email":currentUser.email}), headers: new Headers({'Content-Type': 'application/json'})})
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

    }

};




const deletePlaylist = async () => {


  
}



const [title, setTitle] = useState('');
const [title2, setTitle2] = useState('');
const [song, setSong] = useState('');
const [song2, setSong2] = useState('');
const [ispublic, setIsPublic] = useState('');
const [ispublic2, setIsPublic2] = useState('');




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

        <div className="edit">
        <button onClick={editPlaylist} className="ebtn">Edit Playlist</button>
        <input type="text" placeholder="Enter Playlist Name to Edit" required value={title2} onChange={(e) => setTitle2(e.target.value)}/>  
        <input type="text" placeholder="Songs" required value={song2} onChange={(e) => setSong2(e.target.value)}/>  
        <input type="checkbox" required checked={ispublic2} onChange={(e) => setIsPublic2(e.target.checked)}/>ispublic


        </div>

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