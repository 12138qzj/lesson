let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let qq = [];
let head = 0;
let tail = arr.length;
console.log(tail);

while (head < tail) {
    qq.push(arr[head]);
    head++;
    arr[tail] = arr[head];
    /*head 与 tail之间每次循环 差距都会小1   两个必然会有相等的一刻  退出循环*/
    head++;
    tail++;
}
console.log(arr);
console.log(qq.join(''));