const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let status = fs.statSync('a.txt');
    console.log(status);

    /**
     *Last-Modified与 if-modified-since的使用
     *客户端第一次访问的时候服务器端在返回头的Last-Modified属性中加入时间：
     *res.setHeader('Last-Modified',status.mtime);
     *status.mtime：为文件的修改时间
     *浏览器第二次访问的时候则会在请求头中if-modified-since带上Last-Modified的时间
     * 服务器端只需判断时间是否一样
     */
    // res.setHeader(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (req.headers['if-modified-since']) {
        if (req.headers['if-modified-since'] == status.mtime) {
            //304 not modefied
            //当你给出状态码为304的时候 res.end()则不会返回数据
            //在  res.end('该数据接收不到');中添加数据也客户端也接收不到
            res.statusCode = 304;
            res.end('该数据接收不到');
            return;
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
            res.end('修改了');
            return;
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