const express = require('express');
const app = express();
const cors = require('cors');
const sql = require('mysql2');
const router = express.Router();



app.use(express.json())
app.use(cors());

const db = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'musicdb'
});


db.query("CREATE TABLE playlists (id INT NOT NULL AUTO_INCREMENT,title VARCHAR(45) NOT NULL,song VARCHAR(45) NOT NULL,username VARCHAR(45) NOT NULL,ispublic BIT NOT NULL,createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY (id));", (req, res) => {

});

db.query("CREATE TABLE userinfo(email VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL,is_admin BOOLEAN NOT NULL );", (req, res) => {

});



//Routers
const playlistRouter = require("./routes/playlist");
app.use("/playlist", playlistRouter);


app.listen(9000, () => {
    console.log("Server is running on port 9000");
});







    



