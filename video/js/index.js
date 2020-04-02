const speed = document.querySelector('.speed');
const speed_bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
    //y 取得鼠标在该容器中  距离容器顶部的距离 单位px
    const y = e.pageY - this.offsetTop; //取得该容器距离顶部的距离 e.pageY 页面Y坐标
    const precent = y / this.offsetHeight; //取得该容器的高度
    console.log(this.offsetHeight);
    console.log(y);
    console.log(this.offsetTop);
    console.log(precent);
    const min = 0.4;
    const max = 4;
    const height = Math.round(precent * 100) + '%';
    const text = max * Math.round(precent * 100) / 100; //四舍五入


    const playbackRate = precent * (max - min) + min;
    bar.textContent = playbackRate.toFixed(2) + 'x'
    video.playbackRate = playbackRate;

    console.log(text);
    console.log(height);
    console.log(playbackRate);
    speed_bar.style.height = height;
    // speed_bar.innerHTML = text + "X";
    // speed_bar.textContent = text + "x";

}

speed.addEventListener('mousemove', handleMove)