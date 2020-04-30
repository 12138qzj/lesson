const http = require('http')
const fs = require('fs')

var n = 0;
const server = http.createServer((req, res) => {
    //判断过来的url
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Header", "*");
    if (req.url === '/') {
        console.log('访问9090端口第' + ++n + '次')
        const html = fs.readFileSync('./post.html'); //读取文件 
        res.end(html) //返回文件
    }
    if (req.url === '/getPost') {
        let str = ''
        console.log('访问9090端口第' + ++n + '次')
        console.log('进入getPost')

        //接收前端的数据
        req.on('data', function(chunk) { //request 接收前端的数据
            str += chunk;
        })
        req.on('end', () => {
            console.log("str", str)
            res.end(`<h2>服务器返回是数据:${JSON.parse(str)}</h2>`) //想客户端返回数据

        })


    }
})
server.listen(9090, () => {
    console.log('服务器正在监听9090端口....')
})