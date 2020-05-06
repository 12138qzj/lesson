var tabbar_item = document.querySelectorAll('.weui-tabbar .weui-tabbar__item');
var time = document.querySelectorAll('.select .time');
tabbar_item.forEach(function (tabbar) {
    tabbar.addEventListener('click', function (e) {
        console.log("cishi ", tabbar);
        console.log("cishi ", e);
        Show.call(tabbar);
    });
});
function Show() {
    for (var i_1 = 0; i_1 < tabbar_item.length; i_1++) {
        if (tabbar_item[i_1] === this) {
            console.log(i_1);
            this.classList.add('weui-bar__item_on');
            var imgoperation = this.querySelectorAll('div img');
            imgoperation[0].classList.add('hide');
            imgoperation[1].classList.remove('hide');
        }
        else {
            tabbar_item[i_1].classList.remove('weui-bar__item_on');
            var img = tabbar_item[i_1].querySelectorAll('div img');
            img[0].classList.remove('hide');
            img[1].classList.add('hide');
        }
    }
}
var t;
var value;
var i = 12;
function starttime() {
    value = time[2].innerHTML;
    if (value === '00') {
        console.log('111');
        stopTime();
    }
    else {
        i--;
        if (i < 10) {
            time[2].innerHTML = '0' + i + '';
        }
        else {
            time[2].innerHTML = i + '';
        }
    }
    clearTimeout(t);
    t = setTimeout('starttime()', 1000);
    //if()
    console.log(time[2].innerHTML);
}
starttime();
function stopTime() {
    clearTimeout(t);
    console.log('t' + t);
}
