var pre = ['a', 'b', 'c'];
var pre2 = 'def';
var pre3 = 'ghi';
var newpre = [];

var obj = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}
for (let i = 0; i < pre2.length; i++) {
    // let arr = pre.map(element => {
    //     console.log('element', element + pre2[i]);

    //     return element + pre2[i];
    // })
    // console.log('arr', arr);

    pre.filter(element => {
        console.log('element', element + pre2[i]);
        newpre.push(element + pre2[i])
            // return element + pre2[i];
    })
}

for (let i = 0; i < pre3.length; i++) {
    // let arr = pre.map(element => {
    //     console.log('element', element + pre2[i]);

    //     return element + pre2[i];
    // })
    // console.log('arr', arr);

    newpre.filter(element => {
        console.log('element', element + pre2[i]);
        newpre.push(element + pre3[i])
            // return element + pre2[i];
    })
}
console.log(newpre);
var arr = [];
[...obj[2]].filter(item => {
    arr.push(item)
})
console.log(arr, "-------------");
let arr1 = [];
console.log(pre, "-------------");
arr1 = pre;
pre = [];
console.log(arr1, "arr1-------------");

console.log(pre, "2-------------");