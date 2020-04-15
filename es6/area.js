// 长方形面积的函数

// 函数类型的使用

/**
 * 
 * @param {*} w 
 * @param {*} h 
 * 长方形面积的函数
 * S函数类型的使用
 */
function area(w, h) { //es5使用方法
    console.log(arguments);
    if (arguments.length < 2) {
        throw new Error('参数不够');
        console.log('参数不够');
        return;
    }
    if (typeof w != 'number' || typeof h != 'number') {
        throw new Error('参数类型有误');
        return;
    }
    return w * h;
}

// var area = function(w, h) { //匿名函数
//     return w * h;
// }

//let getArea = (w, h) => w * h


//console.log(getArea(2, 5))
console.log(area(1, 3))