const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors());

const db = require('./models')

//Routers
const playlistRouter = require ("./routes/playlist");
app.use("/playlist", playlistRouter);

db.sequelize.sync().then(()=> {
    app.listen(9000, () => {
        console.log("Server is running on port 9000");
    });
})



