const express = require("express")

const app = express()
app.use(express.static(__dirname+'/static'))
app.listen('5000',() => {
    console.log("static")
})