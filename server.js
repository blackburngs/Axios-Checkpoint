const express = require("express");
const axios = require("axios");
const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

const url =
  "api.openweathermap.org/data/2.5/weather?q=paris&appid=26227f255653d56ef09018925ff5097e";

app.get("/paris", (req, res, next) => {
  axios
    .get(url)
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
