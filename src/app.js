// @ts-check

/* eslint-disable no-console */

const express = require("express");

const app = express();
const PORT = 8080;

/* 호출 방지 */
app.get("/favicon.ico", (req, res) => res.status(204));

app.use("/", (req, res, next) => {
  console.log("middleware 1");
  next();
});

app.use((req, res) => {
  console.log("middleware 2");
  res.send("hello, express");
});

app.listen(PORT, () => {
  console.log(`The Express server is listening at port : ${PORT}`);
});
