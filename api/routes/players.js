const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET request to /players",
  });
});
router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Handling POST request to /players",
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
