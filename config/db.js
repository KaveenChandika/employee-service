const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
.then(() =>{
    console.log("Database Connected successfully");
})