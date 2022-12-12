const express = require("express");
const app = express();
const cors = require("cors");
const sql = require("mysql2");
const router = express.Router();

app.use(express.json());
app.use(cors());

const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "aarish123",
  database: "root",
});

db.query(
  "CREATE TABLE playlists (id INT NOT NULL AUTO_INCREMENT,title VARCHAR(45) NOT NULL,song VARCHAR(45) NOT NULL,username VARCHAR(45) NOT NULL,email VARCHAR(45) NOT NULL,ispublic BOOLEAN NOT NULL,description VARCHAR(2000),createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY (id));",
  (req, res) => {}
);

db.query(
  "CREATE TABLE userinfo(email VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL,is_admin BOOLEAN NOT NULL, username VARCHAR(100) NOT NULL);",
  (req, res) => {}
);

db.query(
  "CREATE TABLE track( track_duration VARCHAR(5),genre VARCHAR(1000),track_name VARCHAR(1000), album_id INT, album_title VARCHAR(1000),  artist_id INT,artist_name VARCHAR(1000),track_id INT NOT NULL )",
  (req, res) => {}
);

db.query(
  "CREATE TABLE currentuser(username VARCHAR(200), time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)",
  (req, res) => {}
);

db.query(
  "CREATE TABLE reviews(playlist_title VARCHAR(200),cusername VARCHAR(50),username VARCHAR(200),review VARCHAR(1000),rating INT, date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)",
  (req, res) => {}
);

db.query(
  "CREATE TABLE dmca(value VARCHAR(5000), updated_At DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)",
  (req, res) => {}
);

// let tracks = [];
// fetch("http://localhost:9000/playlist/trackinfo", {
//   method: "GET",
//   headers: new Headers({ "Content-Type": "application/json" }),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     tracks.push(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const csv = require("csv-parser");
let tracks = [];
const fs = require("fs");

fs.createReadStream("raw_tracks.csv")
  .pipe(csv({}))
  .on("data", (data) => tracks.push(data))
  .on("end", () => {});

router.get("/trackinfo", (req, res) => {
  res.send(tracks);
});

db.query('INSERT INTO dmca (value) VALUES ("TEST");', (req, res) => {});

// for(let g=0;g<tracks.length;g++)
// {
//     console.log("Entered")
//                 fetch("http://" + window.location.hostname + ':9000/playlist/parsedData', {method: "POST", body: JSON.stringify({"track_duration": tracks[g].track_duration, "genre": tracks[g].track_genres, "track_name": tracks[g].track_name ,"album_id=": tracks[g].album_id,"album_title":tracks[g].album_title,"artist_id": tracks[g].artist_id,"artist_name":tracks[g].artist_name,"track_id":tracks[g].track_id}), headers: new Headers({'Content-Type': 'application/json'})})
//                 .then(res => res.json())
//                 .then(data => {

//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })
// }

//Routers
const playlistRouter = require("./routes/playlist");
app.use("/playlist", playlistRouter);

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
