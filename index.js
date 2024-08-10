var birthdate=new Date("2001-07-24");
function calculatelivesworth(birthdate){
    var now= Date.now();
    var days=now-birthdate;
    var dayslived=Math.floor(days/(1000*60*60*24));
    var seconds=Math.floor(days/(1000))
    var minutes=Math.floor(days/(1000*60))
    return{
        dayslived:dayslived,
        seconds: seconds,
        minutes:minutes

    }
    
}
calculatelivesworth(birthdate)



var express=require('express')
var app=express();
app.set("view engine","pug");
app.set("views","./views");
app.get("/livess",function(req,res){
    const livesworth =calculatelivesworth(birthdate)

    res.render("first_view" ,{ 
        dayslived:livesworth.dayslived,
        minutes:livesworth.minutes,
        seconds:livesworth.seconds

    })

})
app.listen(3030)