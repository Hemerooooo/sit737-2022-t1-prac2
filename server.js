var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
var port = process.env.port || 3000;

function addNumbers(number1,number2){
    console.log(number1,number2);
    if(isNaN(number1) || isNaN(number2)){
        return false;
    }
    else{
        return number1 + number2;
    }
}
app.get("/addTwoNumbers",function(req,res){
    var number1 = parseFloat(req.query.number1);
    var number2 = parseFloat(req.query.number2);
    var sum = addNumbers(number1,number2);
    if(sum == false){
        res.json({status:400, data: null, message:"Failure"});
    }
    else{
        res.json({status:200, data: sum, message:"Success"});
    } 
})
app.post("/addNumber", function(req,res){
    var number1 = parseFloat(req.body.first_number);
    var number2 = parseFloat(req.body.second_number);
    var sum = addNumbers(number1,number2);
    if(sum == false){
        res.json({status:400, data: null, message:"Failure"});
    }
    else{
        res.json({status:200, data: sum, message:"Success"});
    } 
})

app.listen(port,()=>{
    console.log("Application has started on port: "+port)
});
