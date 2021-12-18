const express = require("express")
//const {createProxyMiddleware} = require("http-proxy-middleware")
const https = require('https')

const app = express()
app.use(express.static(__dirname+'/'))

// app.use('^/sa',createProxyMiddleware({
//     target:'https://click.suning.cn',
//     changeOrigin:true
// }))
app.get('/sa/jsConfig.action',function(req,res,next){
    new Promise(function(resolve,reject){
        https.get('https://click.suning.cn'+req.url, (res) => {
            const { statusCode } = res;
            const contentType = res.headers['content-type'];

            let error;
            // Any 2xx status code signals a successful response but
            // here we're only checking for 200.
            if (statusCode !== 200) {
                error = new Error('Request Failed.\n' +
                                `Status Code: ${statusCode}`);
            } else if (!/^application\/json/.test(contentType)) {
                error = new Error('Invalid content-type.\n' +
                                `Expected application/json but received ${contentType}`);
            }
            if (error) {
                console.error(error.message);
                // Consume response data to free up memory
                res.resume();
                return;
            }

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData)
                } catch (e) {
                    reject(e)
                console.error(e.message);
                }
            });
        }).on('error', (e) => {
            console.error(`Got error: ${e.message}`);
            reject(e)
        });
    }).then((resData)=>{
        res.send(resData)
    }).catch((e)=>{
        console.log(e)
    })
})

app.listen('9000',() => {
    console.log("static")
})
