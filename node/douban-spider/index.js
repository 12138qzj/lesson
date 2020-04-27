const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
https.get('https://movie.douban.com/top250', (res) => {
    //console.log(res); //获取服务器返回的数据 response中获取
    var html;
    var allFilms = [];
    res.on('data', (chunk) => {
        html = html + chunk;
    })
    res.on('end', () => {
        //console.log(html);
        const $ = cheerio.load(html); //加载html中的数据 存在$里面 
        $('li .item').each(function() { //获取html中  li下的 .item 的数据 进行循环
            const title = $('.title', this).text(); //再 获取为$('li .item')中的.title中的text值
            const rat = $('.rating_num', this).text();
            const pic = $('.pic img', this).attr('src'); //获取img中的src属性
            allFilms.push({ //将数据保存为key value格式  该数据为伪数组
                title: title,
                rat: rat,
                pic: pic
            });

            console.log(title, rat)
        })
        console.log('allFilms', allFilms)
        fs.writeFile('./file.json', JSON.stringify(allFilms), (err) => {
            if (!err) {
                console.log('文件写入成功')
            }
        })
        d(allFilms);
    })

})

function d(allFilms) {
    for (const key in allFilms) {
        //console.log(allFilms[key].pic);
        const pictrue = allFilms[key].pic;
        https.get(pictrue, (res) => {
            // console.log(res)//返回图片的信息
            res.setEncoding('binary') //将图片信息设置为二进格式
            let str = '';
            res.on('data', (chunk) => { //该函数监听的意思 如果有数据 则运行该函数
                str += chunk;
            })
            res.on('end', () => {
                fs.writeFile(`./image/${key}.png`, str, 'binary', (err) => {
                    if (!err) {
                        console.log(key, '图片保存成功')
                    }
                })
            });
        });

    }

    //     let picSrc = allFilms.forEach((data) => {
    //         return data.src;
    //     })
    //     console.log('picSrc', picSrc)
    // }
}