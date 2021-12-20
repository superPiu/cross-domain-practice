const express = require("express")

const app = express()
app.get('/user/list',(req,res,next) => {
    //获取参数
    let {callback,pageNo,pageSize} =  req.query;
    console.log(pageNo,pageSize)

    let resData = {
        responseCode:"0000",
        data:[{'userId':"001"},{'userId':"002"},{'userId':"003"},{'userId':"004"}],
        total:10,
        responseMsg:"请求成功"
    }
    res.send(`${callback}(${JSON.stringify(resData)})`)
})

app.listen(8004,_ =>{
    console.log("jsonpOK")
})