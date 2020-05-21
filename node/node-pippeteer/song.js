const axios = require('axios')

async function run() {
    let res = await axios({
        url: 'http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA'
    })
    let id = res.data.result.songs[0].id;
    console.log(id)
    console.log(res);
    let detall = await axios({
        url: `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${id}`
    })
    console.log(detall);
    // .then(res=>{

    // })
}
run();