const app = require("express")();
 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Blood.html");

})
 app.get("/main.html", (req, res) => {
    res.sendFile(__dirname + "/main.html");
    
})
app.get("/group.html", (req, res) => {
    res.sendFile(__dirname + "/group.html");
    
})
app.listen(3335, () => {
    console.log("Client App running at 3335");
})