import React from 'react'
import { useEffect, useState } from "react";

export default function privatePlaylist() 
{

const createPlaylist = () => {

    console.log("Entered")
    fetch("http://" + window.location.hostname + ':9000/playlist/playlist', {method: "POST", body: JSON.stringify({"title": "test", "songs": "test1", "username": "test2", "public": 1}), headers: new Headers({'Content-Type': 'application/json'})})
    .then(res => res.json())
    .then(data => {
        
    })
    .catch(err => {
        console.log(err)
    })
}

const handleChange = () => {

}

  return (
    <div>
        <div className = "createPlaylist" >
        <button onClick={createPlaylist} className="cpbtn">Create Playlist</button>
        <input type="text" placeholder="Enter Playlist Name" />  
        <input type="checkbox" ></input> ispublic<br></br>
        <input type="text" placeholder="Enter Songs" />

        </div>
    </div>
  )
}