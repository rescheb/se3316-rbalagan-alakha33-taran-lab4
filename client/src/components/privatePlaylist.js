import React from 'react'
import { useEffect, useState } from "react";
import {useRef} from 'react'
import {useAuth} from '../contexts/AuthContext'
const name = require('./SignUp.js');

export default function PrivatePlaylist() 
{
    const{currentUser} = useAuth()
const CreatePlaylist = () => {

 

    console.log("Entered")
    fetch("http://" + window.location.hostname + ':9000/playlist/playlist', {method: "POST", body: JSON.stringify({"title": title, "songs": song, "username": currentUser.email.split('@')[0], "public": ispublic}), headers: new Headers({'Content-Type': 'application/json'})})
    .then(res => res.json())
    .then(data => {
        
    })
    .catch(err => {
        console.log(err)
    })

    console.log(ispublic)
}

const [title, setTitle] = useState('');
const [song, setSong] = useState('');
const [ispublic, setIsPublic] = useState('');

const handleChange = () => {

}

  return (
    <div>
        <div className = "createPlaylist" >
        <button onClick={CreatePlaylist} className="cpbtn">Create Playlist</button>
        <input type="text" placeholder="Enter Playlist Name" required value={title} onChange={(e) => setTitle(e.target.value)}/>  
        <input type="checkbox" required checked={ispublic} onChange={(e) => setIsPublic(e.target.checked)}/>ispublic
        <br></br>
        <input type="text" placeholder="Enter Songs" required value={song} onChange={(e) => setSong(e.target.value)}/>
        </div>
    </div>
  )
}