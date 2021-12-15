const express = require("express")
const {createProxyMiddleware} = require("http-proxy-middleware")

const app = express()
console.log(__dirname)
app.use(express.static(__dirname+'/'))

app.use('/user/list',createProxyMiddleware({
    target:'https://click.suning.cn/sa/jsConfig.action?dm=www.suning.com',
    changeOrign:true,
    onProxyRes:(proxyRes,req,res)=>{
        res.header('Access-Control-Allow-Origin', '*');
        res.end(res)
        console.log(proxyRes)
    }
}))

app.listen('5000',() => {
    console.log("static")
})


// const express = require("express")

// const app = express()
// app.use(express.static(__dirname+'/static'))
// app.listen('5000',() => {
//     console.log("static")
// })