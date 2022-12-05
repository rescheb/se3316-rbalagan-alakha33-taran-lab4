import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';





export default function Search() {

    

    // function filterTrackTitle(arr, query) {
    //     return arr.filter((el) =>
    //         el.track_title.toString().toLowerCase().includes(query.toString().toLowerCase()));
    // }

    // function filterArtistName(arr, query) {
    //     return arr.filter((el) =>
    //         el.artist_name.toString().toLowerCase().includes(query.toString().toLowerCase()));
    // }

    // function filterGenre(arr, query) {
    //     return arr.filter((el) =>
    //         el.track_genres.toString().toLowerCase().includes(query.toString().toLowerCase()));
    // }

    let result = []
    function TrackTitleClick(title)
    {
       // const [trackInfo, setTrackInfo] = useState([]);
        // useEffect(() => {
        //     fetch("http://localhost:9000/playlist/filterTrack?trackName="+title, { method: "GET", headers: new Headers({ 'Content-Type': 'application/json' }) })
        //         .then(res => res.json())
        //         .then(data => {
        //             result=data;
        //             console.log(JSON.stringify(data));
        //         })
        //         .catch(err => { console.log(err) })
        // }, []);    

        // console.log(result)

        
    }





    
        const [data, setData] = useState({data: []});
        const [isLoading, setIsLoading] = useState(false);
        const [err, setErr] = useState('');
      
        const handleClickTrackTitle = async () => {
            fetch("http://localhost:9000/playlist/filterTrack?trackName="+trackTitle, { method: "GET", headers: new Headers({ 'Content-Type': 'application/json' }) })
                .then(res => res.json())
                .then(data => {
                    setResults(data);
                    console.log(JSON.stringify(data));
                })
                .catch(err => { console.log(err) })
          console.log(data)

        };


        const handleClickgenre = async () => {
            fetch("http://localhost:9000/playlist/filterGenre?genre="+genre, { method: "GET", headers: new Headers({ 'Content-Type': 'application/json' }) })
                .then(res => res.json())
                .then(data => {
                    setResults(data);
                    console.log(JSON.stringify(data));
                })
                .catch(err => { console.log(err) })
          console.log(data)

        };

        
        const handleClickArtistTitle = async () => {
            fetch("http://localhost:9000/playlist/filterArtistName?name="+artist, { method: "GET", headers: new Headers({ 'Content-Type': 'application/json' }) })
                .then(res => res.json())
                .then(data => {
                    setResults(data);
                    console.log(JSON.stringify(data));
                })
                .catch(err => { console.log(err) })
          console.log(data)

        };


    



    const [trackInfo, setTrackInfo] = useState([]);
    const [trackTitle, setTrackTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [artist, setArtist] = useState('');
    const [results, setResults] = useState('');



let gsdf;

gsdf=trackTitle;


    return (
        <div>

            <div className="searchTrackTitle" >
                <button onClick={handleClickTrackTitle}  className="tbtn">Search Title</button>                
                <input type="text" placeholder="Enter track title" required value={trackTitle} onChange={(e) => setTrackTitle(e.target.value)} />
            </div>

            <div className="searchGenre" >
                <button onClick={handleClickgenre} className="gbtn">Search genre</button>
                <input type="text" placeholder="Enter genre" required value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>

            <div className="searchArtist" >
                <button onClick={handleClickArtistTitle} className="abtn">Search Artist</button>
                <input type="text" placeholder="Enter Artist Name" required value={artist} onChange={(e) => setArtist(e.target.value)} />
            </div>

          


            {results.length != 0 ? results.map(songs =>
            

                <div>
                    <ul>
                        <li> {songs.track_title+" ID: "+songs.track_id+" By: "+ songs.artist_name} </li>
                        <li>{songs.track_genres.split("'")[7]}</li>
                        <li>{songs.track_duration}</li>
                    </ul>
                    <br></br>

                </div>
            ) : null}
        </div>
    )
}
