const express = require("express");
const router = express.Router();
const sql = require("mysql2");

router.post("/playlist", (req, res) => {
  const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "musicdb",
  });

  console.log(req.body);
  db.query(
    "INSERT INTO playlists (title, song, username, email, ispublic) VALUES (?, ?, ?, ?, ?);",
    [req.body.title, req.body.songs, req.body.username, req.body.email, req.body.public],
    (err, data) => {
      console.log(err);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.post("/logininfo", (req, res) => {
  const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "musicdb",
  });

  console.log(req.body);
  db.query(
    "INSERT INTO userinfo (email, password, is_Admin, username) VALUES (?, ?, ?, ?);",
    [req.body.email, req.body.password, req.body.is_Admin, req.body.username],
    (err, data) => {
      console.log(err);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.post("/currentuser", (req, res) => {
  const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "musicdb",
  });

  console.log(req.body);
  db.query(
    "INSERT INTO currentuser (username) VALUES (?);",
    [req.body.username],
    (err, data) => {
      console.log(err);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.post("/editPlaylist", (req, res) => {
  const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "musicdb",
  });

  console.log(req.body);
  db.query("UPDATE playlists SET song=?, updatedAt= NOW(), ispublic=? WHERE (title=? && email=?)",
    [req.body.song, req.body.ispublic, req.body.title, req.body.email],
    (err, data) => {
      console.log(err);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.post("/playlistDescription", (req, res) => {
  const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "musicdb",
  });

  console.log(req.body);
  db.query("UPDATE playlists SET description=? WHERE (title=? && email=?)",
    [req.body.description, req.body.title, req.body.email],
    (err, data) => {
      console.log(err);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});


router.post("/deletePlaylist", (req, res) => {
  const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "musicdb",
  });

  console.log(req.body);
  db.query("DELETE FROM playlists WHERE (title =? && email=?)",
    [req.body.title, req.body.email],
    (err, data) => {
      console.log(err);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.post("/parsedData", (req, res) => {
  const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "musicdb",
  });

  console.log(req.body);
  db.query(
    "INSERT INTO track (track_duration, genre, track_name,album_id,album_title,artist_id,artist_name,track_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
    [
      req.body.track_duration,
      req.body.genre,
      req.body.track_name,
      req.body.album_id,
      req.body.album_title,
      req.body.artist_id,
      req.body.artist_name,
      req.body.track_id,
    ],
    (err, data) => {
      console.log(err);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.get("/recentPlaylists", (req, res) => {
  db.query(
    "SELECT * FROM playlists WHERE ispublic!=0 ORDER BY updatedAt DESC LIMIT 10",
    (err, data) => {
      console.log(data);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

const db = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "musicdb",
});

router.get("/numuser", (req, res) => {
  db.query("SELECT COUNT(email) FROM userinfo", (err, data) => {
    console.log(data);
    if (err != null) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

router.get("/currentuser1", (req, res) => {
  db.query(
    "SELECT * FROM currentuser ORDER BY time DESC LIMIT 1",
    (err, data) => {
      console.log(data);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.get("/emailusername", (req, res) => {
  let h=req.query.name1
  db.query("SELECT username FROM userinfo WHERE email="+"\'"+h+"\'", (err, data) => {
      console.log(data);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
  });
});

router.get("/privatePlaylists", (req, res) => {
  let email=req.query.email
  db.query("SELECT * FROM playlists WHERE email="+"\'"+email+"\'"+" ORDER BY updatedAt DESC LIMIT 20",
    (err, data) => {
      console.log(data);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.get("/playlistNames", (req, res) => {
  let name=req.query.name
  db.query("SELECT title FROM playlists WHERE email="+"\'"+name+"\'",
    (err, data) => {
      console.log(data);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.get("/playlistNum", (req, res) => {
  let name=req.query.name
  db.query("SELECT COUNT(email) AS num FROM playlists WHERE email="+"\'"+name+"\'",
    (err, data) => {
      console.log(data);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});







router.get("/username", (req, res) => {
  db.query("SELECT COUNT(email) FROM userinfo", (err, data) => {
    console.log(data);
    if (err != null) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

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

router.get("/filterTrack", (req, res) => {
  console.log("GET request for ${req.url}");
  let searchedTracks = req.query.trackName;
  res.send(filterTrackTitle(tracks, searchedTracks));
});

function filterTrackTitle(arr, query) {
  return arr.filter((el) =>
    el.track_title
      .toString()
      .toLowerCase()
      .includes(query.toString().toLowerCase())
  );
}

router.get("/filterGenre", (req, res) => {
  console.log("GET request for ${req.url}");
  let searchedGenre = req.query.genre;
  res.send(filterGenre(tracks, searchedGenre));
});

function filterGenre(arr, query) {
  return arr.filter((el) =>
    el.track_genres
      .toString()
      .toLowerCase()
      .includes(query.toString().toLowerCase())
  );
}

router.get("/filterArtistName", (req, res) => {
  console.log("GET request for ${req.url}");
  let searchedName = req.query.name;
  res.send(filterArtistName(tracks, searchedName));
});

function filterArtistName(arr, query) {
  return arr.filter((el) =>
    el.artist_name
      .toString()
      .toLowerCase()
      .includes(query.toString().toLowerCase())
  );
}

router.get("/Admin", (req, res) => {
  db.query(
    "SELECT email FROM musicdb.userinfo WHERE is_Admin =1;",
    (err, data) => {
      console.log(data);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});

router.get("/AdminCheck", (req, res) => {
  db.query(
    "SELECT is_Admin FROM musicdb.userinfo WHERE email=?;", [req.query.email],
    (err, data) => {
      console.log(data);
      if (err != null) {
        res.json(err);
      } else {
        res.json(data);
      }
    }
  );
});







module.exports = router;
