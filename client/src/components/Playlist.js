import axios from "axios";
import { useEffect, useState } from "react";



export default function Playlist()
{
const [listOfPlaylists, setListOfPlaylists] = useState([]);

useEffect(() => {

  axios.get("http://localhost:9000/playlist").then((response) =>{
    setListOfPlaylists(response.data)
    console.log(response.data);
    console.log(listOfPlaylists);

  })

}, [])


let recentPlaylists = [[]];
let h=1;
let l;

while(h<=10)
{
    l=response.data[0];
    for(let x=0; x<response.data.length;x++)
    {
        
        if(new Date(l.updatedAt) < new Date(response.data[x]))
        {
            l=response.data[x];
        }
        else if(+(new Date(l.updatedAt)) === +(new Date(response.data[x])))
        {
            
        }
    
    }
}


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