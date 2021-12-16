const express = require("express")
const {createProxyMiddleware} = require("http-proxy-middleware")

const app = express()
app.use(express.static(__dirname+'/'))

app.use('^/sa',createProxyMiddleware({
    target:'https://click.suning.cn',
    changeOrigin:true
}))

app.listen('9000',() => {
    console.log("static")
})
