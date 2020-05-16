const http = require('http');
const fs = require('fs');
let version = 12345678;



http.createServer((req, res) => {
    // res.writeHead() 
    // res.setHeader()
    // let status = fs.statSync('a.txt');
    //头部有:If-None-Match: 123456


    //Etag是属于HTTP 1.1属性，它是由服务器生成返回给前端，
    // 当你第一次发起HTTP请求时，服务器会返回一个Etag，
    // 并在你第二次发起同一个请求时，客户端会同时发送一个If-None-Match，
    //而它的值就是Etag的值（此处由发起请求的客户端来设置）

    /**
     * Etag-If-None-Match的用法
     * 浏览器第一次访问 服务器返回版本号 res.setHeader('Etag', version); 
     * 此时浏览器接收到服务器返回的Etag（版本号）浏览器第二次访问的时候则会带着 
     * If-None-Match: 12345678 这个版本号访问服务器，服务器则检测 请求头里是否存在这个版本号
     * 然后判断是否是第二次访问*/
    if (req.headers['if-none-match']) {
        console.log('req.headers', req.headers['if-none-match'])

        if (Number(req.headers['if-none-match'] == version)) {
            //当版本号不改变 则不需要请求数据
            console.log('进入', req.headers['if-none-match'])

            // res.writeHead(304, { 'Content-Type': "text/html;charset=utf8" })
            res.end('hello,world,noxiugai');
            //  res.statusCode = 200; //改变转态码
            return;
        } else {
            res.setHeader('Etag', version);
            res.end('hello,world,yesxiugai')
            return;
        }
    }
    res.setHeader('Etag', version);
    res.end("outs")
        // return;

    // console.log(status);
}).listen('8088', () => {
    console.log('监听8088')
})