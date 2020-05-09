const Koa = require('koa'); // 请上KOA 
const fs = require('fs')
const app = new Koa(); // web server 

//ctx上下文环境相当于context包括(request,response)
//采用基于 请求(ctx.request)
const main = ctx => {
        //console.log("hello kao");
        console.log(ctx.request, "---");
        ctx.response.type = "html"; /* data为下载文件 */
        const file = fs.readFileSync('./text.html', { conding: 'utf-8' })
        ctx.response.body = file;

        //fs.readFile('./text.html', { conding: 'utf-8' }, async(getdata(err, data)))
    }
    // let getdata = function(err, data) {
    //     console.log(err)
    //     ctx.response.body = data;
    // }
app.use(main);
//监听端口
app.listen(3000, () => {
    console.log('服务器正在监听3000端口....')
});