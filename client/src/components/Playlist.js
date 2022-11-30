import axios from "axios";
import { useEffect, useState } from "react";



export default function Playlist()
{
const [listOfPlaylists, setListOfPlaylists] = useState([]);

useEffect(() => {

  axios.get("http://localhost:9000/playlist").then((response) =>{
    setListOfPlaylists(response.data)
    console.log(response.data);

  })

}, [])

return(
<div className="Playlists">
      {listOfPlaylists.map((value, key) => {
        return (  
        <div className="Playlist">
        <div className="title">{value.title}</div>
        <div className="song">{value.song}</div>
        </div>
        ); 
      
        })}
    </div>
);
}