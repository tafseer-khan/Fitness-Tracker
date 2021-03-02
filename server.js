const express = require("express");
const morgan = require ("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

var MONGODDB_URL = process.env.MONGODDB_URI || "mongodb://localhost/workout"
mongoose.connect(MONGODDB_URL,{
    useNewUrlParser:true,
    useFindAndModify:false
})

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT,function(){
    console.log(`Listening on ${PORT}`)
})