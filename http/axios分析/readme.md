- 知识点
    1. axios 不需要建立XHR对象 只需要在axios添加对应的参数
        axios({
                method: 'get',
                url: 'http://neteasecloudmusicapi.zhaoboy.com/search',
                params: obj
            })
    2. axios 基于XHRhttprequest库  编写的第三方库 
    3. fetch 浏览器原生的  另一个发http请求发api （不是基于XML库）
    