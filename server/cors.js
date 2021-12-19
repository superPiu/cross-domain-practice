const express = require("express")

const app = express()
app.all('*',(req,res,next) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorization,Accept,X-Requested-With")
    res.header("Access-Control-Allow-Method","POST,GET,OPTIONS")
    res.header("Content-Type", "application/json;charset=utf-8");
    
    if(req.method === 'OPTIONS'){
        res.send(200)
    }else{
        next()
    }
})
app.get('/user/list',(req,res,next) => {
    let query =  req.query;
    let data = [{'userId':"001"},{'userId':"002"},{'userId':"003"},{'userId':"004"}]
    let response = {
        responseCode:'0000',
        data:data,
        total:3
    }
    res.send(response)
})
app.listen(8003,_ =>{
    console.log("ok")
})