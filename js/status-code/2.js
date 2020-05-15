const http = require('http');
const fs = require('fs');
let version = 12345678;



http.createServer((req, res) => {
    // res.writeHead() 
    // res.setHeader()
    // let status = fs.statSync('a.txt');
    //头部有:If-None-Match: 123456

    if (req.headers['if-none-match']) {
        console.log();
        if (Number(req.headers['if-none-match'] == version)) {
            //当版本号不改变 则不需要请求数据
            res.statusCode = 304; //改变转态码
            res.writeHead(200, { 'Content-Type': "text/html;charset=utf8" })
            res.end('hello,world,noxiugai');
            return;
        } else {
            res.setHeader('Etag', version);
            res.end('hello,world,yesxiugai')
            return;
        }
    }
    res.setHeader('Etag', version);
    res.end("outs")
    return;

    // console.log(status);
}).listen('8088', () => {
    console.log('监听8088')
})