const express = require("express");
const router = express.Router();
const { publicplaylists } = require("../models");

router.get("/", async (req, res) => {
  const listOfPublicPlaylists = await publicplaylists.findAll();
  res.json(listOfPublicPlaylists);
});

router.post("/", async (req, res) => {
  const pplay = req.body;
  await publicplaylists.create(pplay);
  res.json(pplay);
});

module.exports = router;
