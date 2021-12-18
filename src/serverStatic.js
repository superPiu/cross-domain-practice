const { response } = require("express")
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
app.use(express.static(__dirname+'/static'))
app.get('/user/list',function(req,res,next){
    let resData = {
        'responseCode' : '0000',
        'data':[],
        'total':10

    }
    res.send(JSON.stringify(resData));
})
app.put('/user/list',function(req,res,next){
    res.send('操作成功,你真棒!')
})
app.post('/user/list',function(req,res,next){
    res.send('操作成功,你真棒')
})
app.delete('/user/list',function(req,res,next){
    res.send('操作成功,你真棒')
})
app.listen('5000',() => {
    console.log("static")
})