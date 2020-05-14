var name = 'lihua';

function showName() {
    //词法作用域（静态）：js查找按照代码的书写的位置来决定的，而不是按照调用位置。
    debugger; //浏览器的断点的一种方式

    console.log(name) //将变量存放在闭包里面(Closure)相当于全局变量
}

function changName() {
    var name = '修改'
    showName();
}

changName();

//变量作用域延长

function test() {
    let num = 0;

    function test1() {
        console.log('num', num++)
    }
    return test1;
}
var fn = test();
fn();
fn();
fn();