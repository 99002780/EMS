const app=require('express')();
const { group } = require('console');
var fs = require('fs');
var searchgroup=require("./donersdata.json");
var searchgroup = [];
app.get("/searchByGroup", function(req, res)
{
    var bgroup = req.query.bg;
    //searchgroup = [];
    searchgroup.forEach(element =>
    {
        if(bgroup == element.group)
        {
            searchgroup.push(element); // this will only send name of the hotel, for full detail use push(element)
        }
    });
    if(searchgroup.length==0)
      {
          var msg="No donor Available";
          res.send(msg);
      }
     else{
         
     }
     
})
app.listen(8888,()=>{
    console.log("Running at 8888");
})
