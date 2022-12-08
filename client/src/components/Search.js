import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({ data: [] });

  const handleClickTrackTitle = async () => {
    fetch(
      "http://localhost:9000/playlist/filterTrack?trackName=" + trackTitle,
      {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        console.log(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };

  const handleClickgenre = async () => {
    fetch("http://localhost:9000/playlist/filterGenre?genre=" + genre, {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        console.log(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };

  const handleClickArtistTitle = async () => {
    fetch("http://localhost:9000/playlist/filterArtistName?name=" + artist, {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        console.log(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };

  const [trackTitle, setTrackTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [artist, setArtist] = useState("");
  const [results, setResults] = useState("");

  return (
    <div>
      <div className="searchBars">
        <br></br>
        <div className="searchTrackTitle">
          <input
            type="text"
            placeholder="Enter track title"
            required
            value={trackTitle}
            onChange={(e) => setTrackTitle(e.target.value)}
          />
          <button onClick={handleClickTrackTitle} className="tbtn">
            Search Title
          </button>
        </div>
        <br></br>
        <div className="searchGenre">
          <input
            type="text"
            placeholder="Enter genre"
            required
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <button onClick={handleClickgenre} className="gbtn">
            Search genre
          </button>
        </div>
        <br></br>
        <div className="searchArtist">
          <input
            type="text"
            placeholder="Enter Artist Name"
            required
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <button onClick={handleClickArtistTitle} className="abtn">
            Search Artist
          </button>
        </div>
      </div>
      <br></br>
      {results.length != 0
        ? results.map((songs) => (
            <div>
              <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
                {songs.track_title +
                  " ID: " +
                  songs.track_id +
                  " By: " +
                  songs.artist_name}
              </button>
              {isOpen && (
                <div className="content">
                  <li>{songs.track_genres.split("'")[7]}</li>
                  <li>{songs.track_duration}</li>
                  <li>
                    <a href={"https://www.youtube.com/results?search_query="+songs.track_title} target="_blank">View song on Youtube</a>
                  </li>


                </div>
              )}
            </div>
          ))
        : null}
    </div>
  );
}
