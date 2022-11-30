const express = require("express");
const router = express.Router();
const { playlists } = require("../models");


router.get('/', async (req, res)=> {

    const listOfPlaylists = await playlists.findAll();
    res.json(listOfPlaylists);

});

router.post('/',async (req,res)=> {
    const play = req.body;
    await playlists.create(play);
    res.json(play);
});

module.exports = router;