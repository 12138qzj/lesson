const http = require('http');
const fs = require('fs');
const users = require('./users.json')
let version = 12345678;

/**
 * 服务器 服务./index.html
 */

http.createServer((req, res) => {
    // res.writeHead() 
    // res.setHeader()
    // let status = fs.statSync('a.txt');
    //头部有:If-None-Match: 123456

    // res.setHeader("Access-Control-Allow-Origin", "*");
    let status = fs.statSync('users.json');
    console.log("req.url", req.url)
    if (req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" })
        console.log("首页")
        const readstream = fs.createReadStream('./index.html');
        readstream.pipe(res);

    } else if (req.url == '/users') {
        console.log("用户页")

        if (req.headers['if-modified-since']) {
            if (req.headers['if-modified-since'] == status.mtime) {
                res.writeHead(304, { "Content-Type": "text/html;charset=utf8" });
                console.log("未修改过返回304")
                res.end();
                return;
            } else {
                res.setHeader('Last-Modified', status.mtime);
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                // 文件被修改 重新设置Last-Modified 便于下次访问
                console.log('修改了返回修改数据')
                res.end(JSON.stringify(users))
                return;
            }
        }
        console.log("用户请求页wai")
        res.setHeader('Last-Modified', status.mtime);
        res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
        console.log(JSON.stringify(users))
        res.end(JSON.stringify(users))
            // res.end('')只能传输文本或者buffer字节流

    } else {
        res.end("null")
    }


    // console.log(status);
}).listen('8088', () => {
    console.log('监听8088')
})