const express = require("express");
const router = express.Router();
const sql = require("mysql2");

router.post('/playlist', (req,res) => {

    const db = sql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Yoyomama_123',
        database: 'musicdb'
    });

    console.log(req.body);
    db.query("INSERT INTO playlists (title, song, username, ispublic) VALUES (?, ?, ?, ?);", [req.body.title, req.body.songs, req.body.username, req.body.public], (err, data) => {

        console.log(err);
     if(err != null){
        res.json(err)
     }
     else{
         res.json(data)
     }})
 }
 );

 router.post('/logininfo', (req,res) => {

    const db = sql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Yoyomama_123',
        database: 'musicdb'
    });

    console.log(req.body);
    db.query("INSERT INTO userinfo (email, password, is_Admin) VALUES (?, ?, ?);", [req.body.email, req.body.password, req.body.is_Admin], (err, data) => {

        console.log(err);
     if(err != null){
        res.json(err)
     }
     else{
         res.json(data)
     }})
 }
 );


router.get('/recentPlaylists',(req,res) => {
    db.query('SELECT * FROM playlists ORDER BY updatedAt DESC LIMIT 10', (err, data) => {
        console.log(data);
        if(err != null){
           res.json(err)
        }
        else{
            res.json(data)
        }})
    }

);

module.exports = router;