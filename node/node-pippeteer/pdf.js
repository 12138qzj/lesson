const fs = require('fs');

const promise1 = new Promise((resolve, reject) => {
    fs.readFile('./package.json', (err, info) => {
        resolve(info); //需要将状态改变 才能执行完出去  使用resolve改变Premise的状态
    })
})
const promise2 = (info) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./p.json', info, (err) => {
            if (!err) {
                resolve();
            } else {
                reject();
            }
        })
    })
}
promise1.then((info) => {
    return promise2(info);
}).then(() => {
    console.log("读写完成")
})