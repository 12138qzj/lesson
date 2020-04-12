fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
    .then(res => {
        console.log(res); //res 获取内容的对象
        return res.json(); // fetch拉取需要时间 then()：执行完在运行之中的函数 将数据转化为数组
    })
    .then(data => {
        console.log(data);

    })