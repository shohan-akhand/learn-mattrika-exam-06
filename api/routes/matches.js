const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "get the list of matches",
  });
});
router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "create a match",
  });
});

router.get("/:matchId", (req, res, next) => {
  const id = req.params.matchId;
  res.status(200).json({
    message: "You got the match",
    id: id,
  });
});

router.put("/:matchId", (req, res, next) => {
  res.status(200).json({
    message: "Updated match",
  });
});

router.delete("/:matchId", (req, res, next) => {
  res.status(200).json({
    message: "delete a match",
  });
});

module.exports = router;
