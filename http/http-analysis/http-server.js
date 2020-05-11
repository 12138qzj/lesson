const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    //response 数据返回

    //req  :request 访问者浏览访问 
    //res  :response 服务器返回数据的对象（一个载体一样）
    console.log(req)
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    res.end("首页")
});

server.listen(8088, () => {
    console.log('正在监听8088端口...')
})