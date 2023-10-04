const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const playerRoutes = require("./api/routes/players");
const matchRoutes = require("./api/routes/matches");
const teamRoutes = require("./api/routes/teams");

mongoose.connect(
  "mongodb+srv://shohanakhand: " +
    process.env.MONGO_ATLAS_PW +
    " @cricket-match.lrpc1h4.mongodb.net/?retryWrites=true&w=majority",
  {
    useMongoClient: true,
  }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);
app.use("/teams", teamRoutes);

module.exports = app;
