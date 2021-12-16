const express = require("express")
const {createProxyMiddleware} = require("http-proxy-middleware")
const fs =require("fs")

const app = express()
console.log(__dirname)
app.use(express.static(__dirname+'/'))

app.use('^/sa',createProxyMiddleware({
    target:'http://click.suning.cn',
    changeOrign:true,
    // ssl:{
    //     key: fs.readFileSync('privatekey.pem'), 
    //     cert: fs.readFileSync('certificate.pem')  // SELF-SIGNED CERTIFICATE
    //   }
    // onProxyRes:(proxyRes,req,res)=>{
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.end(res)
    //     console.log(proxyRes)
    // }
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