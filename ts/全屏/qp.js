//没定义一个
//ts中 内置的类型
//boolen number string 
// 数组 元,3组
var list = [1, 2, 3];
var list1 = [1, 2];
/* */
var box = document.querySelector(".box");
var btn = document.querySelector("button");
var RFS_METHOD;
function toFullVideo() {
    if ('requestFullscreen' in document.body) {
        RFS_METHOD = 'requestFullscreen';
    }
    else if ('webkitRequestFullScreen' in document.body) {
        RFS_METHOD = 'webkitRequestFullScreen';
    }
    else if ('mozRequestFullScreen' in document.body) {
        RFS_METHOD = 'mozRequestFullScreen';
    }
    else if ('msRequestFullscreen' in document.body) {
        RFS_METHOD = 'msRequestFullscreen';
    }
}
function beFull(el) {
    // 检查兼容性
    // 4 个中的一个
    toFullVideo();
    console.log(el, RFS_METHOD);
    el[RFS_METHOD]();
}
// function beFull(el: Element) {
//     el.addEventListener('fullscreenchange', (event) => {
//         console.log(event);
//     })
// }
console.log(box);
if (btn) {
    btn.addEventListener('click', function () {
        if (box)
            beFull(box);
        // box.requestFullscreen() //全屏api 被Element调用
    });
}
