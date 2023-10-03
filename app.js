const express = require("express");
const app = express();
const playerRoutes = require("./api/routes/players");
const matchRoutes = require("./api/routes/matches");
const teamRoutes = require("./api/routes/teams");

app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);
app.use("/teams", teamRoutes);

module.exports = app;
