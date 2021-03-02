const express = require("express");
const morgan = require ("morgan");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 8080;
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/myFirstDatabase',
    {useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false}
)

app.listen(PORT,function(){
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
})