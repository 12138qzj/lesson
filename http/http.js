const http = require('http');
const fs = require('fs');
const server = http.createServer(
    function(req, res) {
        //response 数据返回

        if (req.url.includes('/search')) {
            //res.writeHead(200,
            //设置返回的类型  后端告诉前端 返回的内容为什么类型读取的编码方式
            // )
            //res.end('<h2>dong</h2>'); //将数据返回到前端
            //去读取文件
            //const file = fs.readFileSync('./http.html', { conding: 'utf-8' })
            console.log(req.url.split('?')[1]);
            res.end(req.url.split('?')[1])
            return;
        }
        res.writeHead(200,
                //设置返回的类型  后端告诉前端 返回的内容为什么类型读取的编码方式
                { 'Content-Type': 'text/html;charset=utf-8' })
            //res.end('<h2>dong</h2>'); //将数据返回到前端
            //去读取文件
        const file = fs.readFileSync('./http.html', { conding: 'utf-8' })
            //console.log("第二部的")
        res.end(file) //只能返回一次
    }
);

server.listen(8082, () => {
    console.log('正在监听8082端口...')
})