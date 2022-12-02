import axios from "axios";
import { useEffect, useState } from "react";




export default function Playlist()
{


    const [recentPlaylists, setRecentPlaylists] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9000/playlist/recentPlaylists", { method: "GET", headers: new Headers({ 'Content-Type': 'application/json' }) })
            .then(res => res.json())
            .then(data => {
                setRecentPlaylists(data);
                console.log(JSON.stringify(data));
            })
            .catch(err => { console.log(err) })
    }, []);

    return (
        <div >

            {recentPlaylists.length !=0 ? recentPlaylists.map(playlist =>

                <div>
                    <ul>
                        <li> {playlist.title+" by: "+playlist.username+" #tracks: "+ playlist.song.split(",").length} </li>
                        {/* <li> {playlist.title} </li>
                        <li> {playlist.song} </li>
                        <li> {playlist.username} </li>
                        <li> {playlist.ispublic} </li>
                        <li> {playlist.createdAt} </li>
                        <li> {playlist.updatedAt} </li> */}
                    </ul>
                    <br></br>

                </div>
            ) : null}
        </div>
    );


}