// @ts-check

const express = require("express");
const user = require("./users");

const router = express.Router({ mergeParams: true });

router.use("/users", user);

module.exports = router;
