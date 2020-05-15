const http = require('http');
const fs = require('fs');
const users = require('./users.json')
let version = 12345678;



http.createServer((req, res) => {
    // res.writeHead() 
    // res.setHeader()
    // let status = fs.statSync('a.txt');
    //头部有:If-None-Match: 123456

    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" })

        console.log("首页")
        fs.createReadStream('./index.html').pipe(res)
    } else if (req.url == '/users') {

        console.log("用户ye ")

        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" })

        // res.end('')只能传输文本或者buffer字节流
        console.log(JSON.stringify(users))
        res.end(JSON.stringify(users))
    }


    // console.log(status);
}).listen('8088', () => {
    console.log('监听8088')
})