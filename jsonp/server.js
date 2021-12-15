const express = require("express")

const app = express()
app.get('/user/list',(req,res,next) => {
    let {callback,pageNo,pageSize} =  req.query;
    console.log(pageNo,pageSize)
    let resData = [{'userId':"001"},{'userId':"002"},{'userId':"003"},{'userId':"004"}]
    res.send(`${callback}(${JSON.stringify(resData)})`)
})

app.listen(8004,_ =>{
    console.log("jsonpOK")
})