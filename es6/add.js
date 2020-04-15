/**
 * @author qzj
 * @data 2020-04-15
 * @function 两数相加
 * @param {@type number} num1 num2
 * @return {number}
 */
function add(num1, num2) {
    if (arguments.length < 2) {

        console.log('参数不够');
        return;
    }
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        throw new Error('参数类型有误');
        return;
    }
    return num1 + num2;

}
console.log(add(1, 5))