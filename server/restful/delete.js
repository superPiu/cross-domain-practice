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

//删除用户
app.get('user/:id',function(req,res,next){
    let { id } = req.params;
    let resData = {
        'responseCode' : '0000',
        'responseMsg':`用户${id}删除成功`
    }
    res.send(resData)
})
app.listen('5000',() => {
    console.log("delete")
})