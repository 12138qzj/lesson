const http = require('http');

http.createServer((req, res) => {

    //  'Access-Control-Allow-Headers': 'content-type'
    //当前端需要发数据过来的时候就要设置这个头部
    res.writeHead(200, {
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Methods': 'GET,POST',
            'Access-Control-Max-Age': -1, //预检请求结果缓存时间，默认是为5s
            'Access-Control-Allow-Headers': 'content-type,X-Requested-With',
            'Access-Control-Allow-Credentials': true //凭证 cookie ,允许前端请求携带 cookie


        })
        //cookie:随着http请求头自动发生 随着http自动发送给后端
    let posts = ['js', 'php']
    res.end(JSON.stringify(posts));
}).listen(9090, () => {
    console.log("正在监听9090端口。。。")
})