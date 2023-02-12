const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json())

require("./config/db");

const router = require("./routes/employee");
app.use('/api',router)

module.exports = app;