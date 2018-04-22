require("dotenv").config();
const app = require("express")(),
  { CONNECTION_STRING, port = 3001 } = process.env,
  { json } = require("body-parser"),
  mongoose = require("mongoose"),
  routes = require("./routes");

app.use(json());

mongoose
  .connect(CONNECTION_STRING)
  .then(() => console.log("Successfully connected to MongoDb"))
  .catch(err => console.log(`Error connecting to DB: ${err}`));

routes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
