const express = require('express') //类似于 koa框架
const data = require('./db.json');
const app = express();

//get 请求谓语动词
app.get('/', function(req, res) {

    // res.json(data);
    //框架自动设置为 响应头：‘content-type’: ‘application/json’
    res.json(data);
})
app.get('/posts/:id', function(req, res) {
    let id = req.params.id;
    let post = data.posts.filter(post => post.id == id);
    res.json(post)
        // id
        // data.posts  id   
        // res.json()
})

app.listen(8088, () => {
    console.log("监听8088端口.....")
})