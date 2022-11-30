import axios from "axios";
import { useEffect, useState } from "react";




export default function Playlist()
{
let data=[];
const [listOfPlaylists, setListOfPlaylists] = useState([]);

useEffect(() => {

  axios.get("http://localhost:9000/playlist").then((response) =>{
    setListOfPlaylists(response.data)
    
   
    
  })


}, [])

data = listOfPlaylists;

let recentPlaylists = [];
let l;

while(recentPlaylists.length<10)
{
    l=data[0];
    for(let x=0; x<data.length;x++)
    {
        
        if(new Date(l.updatedAt.split(" ")[0]) < new Date(data[x].updatedAt.split(" ")[0]))
        {
            l=data[x];
        }

        else if(+(new Date(l.updatedAt.split(" ")[0])) === +(new Date(data[x].updatedAt.split(" ")[0])))
        {
            if(l.updatedAt.split(" ")[1]<data[x].updatedAt.split(" ")[1])
            {
                l=data[x];
            }
        }
    }

    for(let p=0;p<data.length;p++)
    {
        if(l.username===data[p].username && l.title === data[p].title)
        {
            data.splice(p,1);
        }
    }
    recentPlaylists.push(l);

}

console.log(recentPlaylists);

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