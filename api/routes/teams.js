const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Get a list of teams",
  });
});
router.post("/", (req, res, next) => {
  const team = {
    teamId: req.body.teamId,
    country: req.body.country,
  };
  res.status(201).json({
    message: "Create a team",
    createdTeam: team,
  });
});

router.get("/:teamId", (req, res, next) => {
  const id = req.params.teamId;
  res.status(200).json({
    message: "You got the team",
    id: id,
  });
});

router.put("/:teamId", (req, res, next) => {
  res.status(200).json({
    message: "Updated Team",
  });
});

router.delete("/:teamId", (req, res, next) => {
  res.status(200).json({
    message: "Delete a specific team",
  });
});

module.exports = router;
