//没定义一个
//ts中 内置的类型
//boolen number string 
// 数组 元,3组
let list = [1, 2, 3];
let list1: number[] = [1, 2]
/* */

const box = document.querySelector(".box")
const btn = document.querySelector("button")

// console.log(box);
// btn.addEventListener('click', () => {
//     box.requestFullscreen() //全屏api 被Element调用
// })
// box.addEventListener('fullscreenchange', (event) => {
//     console.log(event);
// })

type RFSmethods = 'requestFullscreen' |
    'webkitRequestFullScreen' |
    'mozRequestFullScreen' |
    'msRequestFullscreen'

// dom 没有帮我定义 
interface Element {
    
    requestFullscreen(): any,
    webkitRequestFullScreen(): any,
    mozRequestFullScreen(): any,
    msRequestFullscreen(): any
}
let RFS_METHOD: RFSmethods

function toFullVideo() {

    if ('requestFullscreen' in document.body) {
        RFS_METHOD = 'requestFullscreen';
    } else if ('webkitRequestFullScreen' in document.body ) {
        RFS_METHOD = 'webkitRequestFullScreen';
    } else if ('mozRequestFullScreen' in document.body ) {
        RFS_METHOD = 'mozRequestFullScreen';
    } else if ('msRequestFullscreen' in document.body ) {
        RFS_METHOD = 'msRequestFullscreen';
    } 
  }

  function beFull (el: Element) {
    // 检查兼容性
    // 4 个中的一个
    toFullVideo();
    console.log(el,RFS_METHOD)
    el[RFS_METHOD]();
}
// function beFull(el: Element) {
//     el.addEventListener('fullscreenchange', (event) => {
//         console.log(event);
//     })
// }


console.log(box);
if (btn) {
    btn.addEventListener('click', () => {
        if (box )
            beFull(box)
        // box.requestFullscreen() //全屏api 被Element调用
    })
}

