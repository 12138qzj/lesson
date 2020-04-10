//数组去重
/**
 * 
 * @param {Array} arr
 * @return {Array} 
 */
//function unique(arr)  es5
//function 关键字没有，
//es6 箭头函数 省略为:  ()=>{}
let fn;
console.log("fn1:"+typeof fn);
fn=null;
console.log("fn2:"+typeof fn);
fn=()=>{};
console.log("fn3:"+typeof fn);
const unique=(arr)=>{
    let res=[];//新建一个数组
     

    for(var i=0,arrLen=arr.length;i<arrLen;i++){
        var current = arr[i];//基地  局部变量，缓存值
        if(res.indexOf(arr[i])== -1){
            res.push(arr[i]);
        }
    }

//    for (var i=0;i<arr.length;i++){
//        //如果在res数组中 就不加入
//        let isIn=false;
//        for(var j=0;j<res.length;j++){
//            if(arr[i]===res[j]){
//                isIn=true;
//                break;
//             }
//        /* //    }else{ 
//         //        res[n++]=arr[i];
//         //    }*/
//        }
//        if(!isIn){
//            res.push(arr[i]);
//        }
//    }
    return res;

}
var arr=['1',2,3,2,5,1,6]//js 的数组 类型随意
console.log(arr);
console.log(typeof unique== 'function'&& unique(arr));//tyeof  为函数类型

