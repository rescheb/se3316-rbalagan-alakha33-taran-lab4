const express = require('express');
const app = express();
app.use(express.json())

const db = require('./models')

//Routers
const playlistRouter = require ("./routes/playlist");
app.use("/playlist", playlistRouter);

db.sequelize.sync().then(()=> {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})

