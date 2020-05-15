const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let status = fs.statSync('a.txt');
    console.log(status);

    // res.setHeader(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (req.headers['if-modified-since']) {
        if (req.headers['if-modified-since'] == status.mtime) {
            //304 not modefied
            res.statusCode = 304;
            res.end();
            return;
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            res.end('修改了');
        }
    }
    //第一次请求,客户端请求头不会有If-Modified-Sinces
    res.setHeader('Last-Modified', status.mtime);

    //下次请求时,客户端会带上If-Modified-Sinces请求头中
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })

    fs.createReadStream('a.txt', { encodeURI: 'utf8' }).pipe(res);

}).listen('8088', () => {
    console.log('监听端口8088')
})