const app=require('express')();
 var fs = require('fs');
var doners=[];
var sname,sage,sgender,slocation,number,bgroup,data;
function fillData(){
    doners=JSON.parse(fs.readFileSync("./donersdata.json","utf-8"));
}
app.get("/users",(req,res)=>{
    doners=JSON.parse(fs.readFileSync("./donersdata.json","utf-8"));
    console.log(doners);
    //reading the data from the form
    sname=req.query.name;
    //console.log(sname);
    sage=req.query.age;
    //console.log(sage)
    sgender=req.query.gender;
    //console.log(sgender)
    slocation=req.query.city;
    //console.log(slocation)
    number=req.query.phone;
    //console.log(number)
    bgroup=req.query.bloodgroup;
    //console.log(bgroup)
    doners.push({name:sname,age:sage,gender:sgender,location:slocation,
    pnumber:number,group:bgroup})
    data=JSON.stringify(doners);
    console.log("data",data)
    fs.writeFileSync('./donersdata.json', data)
})
app.get("/searchByGroup", function(req, res)
{
    var searchgroup = [];
    var bgroup = req.query.bg;
    if(doners.length==0)
        fillData()
    //searchgroup = [];
   
    doners.forEach(element =>
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
        res.send(searchgroup);
     }
     
})

//creating port 
app.listen(1234,()=>{
    console.log("Running at 1234");
})
