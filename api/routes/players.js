const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Player = require("../models/player");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET request to /players",
  });
});
router.post("/", (req, res, next) => {
  const player = new Player({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    jerseyNo: req.body.jerseyNo,
  });
  player.save().then((result) => {
    console.log(result);
  });

  res.status(201).json({
    message: "Handling POST request to /players",
    createdPlayer: player,
  });
});

router.get("/:playerId", (req, res, next) => {
  const id = req.params.playerId;
  res.status(200).json({
    message: "You got the ID",
    id: id,
  });
});

router.put("/:playerId", (req, res, next) => {
  res.status(200).json({
    message: "Update Player",
  });
});

router.delete("/:playerId", (req, res, next) => {
  res.status(200).json({
    message: "Delete Player",
  });
});

module.exports = router;
