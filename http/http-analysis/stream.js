const fs = require('fs')
const koa = require('koa') //node 开发框架

const app = new koa();

const main = ctx => {

    if (ctx.request.url === '/tp.jpeg') {

        console.log('url', ctx.request.url);
        ctx.response.type = 'image'; // 响应头  png  css js
        //在服务器端 打开可读流， TCP 
        ctx.response.body = fs.createReadStream('./tp.jpeg');
    } else if (ctx.request.url === '/tp.jpeg') {

        console.log('url', ctx.request.url);
        ctx.response.type = 'image'; // 响应头  png  css js
        //在服务器端 打开可读流， TCP 
        ctx.response.body = fs.createReadStream('./tp.jpeg');
    } else {
        ctx.response.type = 'html'; // 响应头  png  css js
        //在服务器端 打开可读流， TCP 
        ctx.response.body = fs.createReadStream('./text.html');
    }
}
app.use(main)
app.listen(8089, () => {
    console.log('正在监听8089端口')
})