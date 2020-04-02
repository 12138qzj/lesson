const page_one = document.querySelector('.page_one');
const page_two = document.querySelector('.page_two');
const page_btn = document.querySelector('.page_one button');
let step = 1;
page_btn.addEventListener('click', function() {

    document.body.removeChild(page_one);
    init();

})

function init() {
    step++;
    var black = [];
    let [normalColor, specialcolor] = getColor(step);
    let position = Math.floor(Math.random() * (step * step - 1));

    let blackwidth = 100 / step;
    console.log(position);
    for (var i = 0; i < step * step; i++) {
        let item = `
        <div class="black" style="width: ${blackwidth}%">
            <div 
            
            style="background-color: #${i===position ? specialcolor:normalColor};"></div>
        </div>
        `
        black.push(item);
    }
    console.log(black);
    page_two.innerHTML = black.join(' ');
    /*一个一个添加*/
    // page_two.addEventListener('mouseClick', function() {
    //     console.log("sdefgrt");
    // })

    const allblack = document.querySelectorAll('.black');
    allblack[position].addEventListener('click', function() {
        init();
    })


}

/**
 * 根据关卡等级返回相应的一般颜色和特殊颜色
 * @param {number} step 关卡
 */
function getColor(step) {
    let random = Math.floor(100 / step);
    // let random = Math.floor(Math.abs(100 - 4 * step));
    let color = randomColor(17, 255),
        m = color.match(/[\da-z]{2}/g);
    console.log("m", m);
    console.log(typeof m[0]);
    console.log("color", color);
    for (let i = 0; i < m.length; i++) m[i] = parseInt(m[i], 16); //rgb
    let specialColor =
        getRandomColorNumber(m[0], random) +
        getRandomColorNumber(m[1], random) +
        getRandomColorNumber(m[2], random);
    return [color, specialColor];
}

function getRandomColorNumber(num, random) {
    let temp = Math.floor(num + (Math.random() < 0.5 ? -1 : 1) * random);
    if (temp > 255) {
        return "ff";
    } else if (temp > 16) {
        return temp.toString(16);
    } else if (temp > 0) {
        return "0" + temp.toString(16);
    } else {
        return "00";
    }
}
// 随机颜色 min 大于16
function randomColor(min, max) {
    var r = randomNum(min, max).toString(16);
    var g = randomNum(min, max).toString(16);
    var b = randomNum(min, max).toString(16);
    return r + g + b;
}
// 随机数
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}