const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json())

require("./config/db");

const router = require("./routes/employee");
app.use('/api',router)

app.listen(PORT, () =>{
    console.log(`Server up and running on port ${PORT}`)
})

