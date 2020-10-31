const express = require("express");
const app = express();
//for loading images
app.use(express.static('images'));
 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Blood.html");

})
 app.get("/login.html", (req, res) => {
    res.sendFile(__dirname + "/login.html");
    
})
app.get("/group.html", (req, res) => {
    res.sendFile(__dirname + "/group.html");
    
})
app.listen(3335, () => {
    console.log("Client App running at 3335");
})