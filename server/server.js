const express = require("express");
const cors = require("cors");
const path = require("path"); //connects server to html

const app = express();
app.use(cors());
app.use(express.json()); 
// Middleware
app.use(express.static(path.join(__dirname, "../public")));
// app.use("/styles", express.static(path.join(__dirname, "../public/index.css"))); <-- optional, or you can rename the html href

// // End points (Choose this or Middleware)
// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "../public/linda.png"));
// })

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// })

// app.get("/styles", function(req, res){
//     res.sendFile(path.join(__dirname, "../public/index.css"));
// })

const port = process.env.PORT || 4005; //variable to store the port -- supplied by deployment service, for ex: Heroku. 4005 allows you to run the code locally prior to deployment. 

app.listen(port, ()=> {
    console.log(`We vibin on port ${port}`);
});
