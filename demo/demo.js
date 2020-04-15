// var a=3;
// function foo(str,b){
//     eval(str);
//     console.log(a,b);
// }
// foo("a=5",6);
// var fo=true;
// const c=9;
// var d;
// console.log(d);
// if(fo){
//     {
//         let bar=fo*2;//将值绑定到这个块中
//         //bar=something(bar);

//         console.log(bar+","+c);
//     }
// }

// //c=5;// 用 const时不可被修改值  报错  
// console.log(c);
// /*  闭包的使用**/
// //闭包的使用 

// function foobb(){
//     var a=2;
//     function bar(){
//         console.log("闭包里面a的值："+a);
//     }
//     return bar;//将要使用的内函数  用变量的形式返回
// }
// foobb();//直接调用外函数无法访问之中的函数
// var barw=foobb();  //将函数bar()作为变量bar返回给barw
// barw(); //通过变量调用函数foobb()中的函数bar

// //时间闭包

// function wait(message){

//     setTimeout(function timer(){
//         console.log(message);
//     }, 1000);
// }
// wait("hello!")
// //  以下测试结果出错 显示bar未定义
// // function text(mes){

// //     bar(function bar1(){
// //         console.log(mes);
// //     });
// // }
// // text("测试");

// var a=(function a(){
//     console.log("a的值：");
// })();                     //立即执行函数 ： 第一个（）里的内容表示为表达式，第二个（）里面的内容则执行了这个函数。
// function coolmodel()
// {
//     var something="cool";
//     var anthar=[1,2,3];
//      function dosomething()
//      {
//         // console.log(something);
//         return something;
//      }
//      function doanthar(){
//          console.log(anthar);
//      }
//      return {
//          namesomething:dosomething,
//          nameanthar:doanthar
//      };
// }
// var foomodel=coolmodel();

// var string=foomodel.namesomething();//通过调用返回的JSON，去调用模块中的函数
// console.log("dede"+string);

// var modules=(function manage(){ //(function(){...})();  这个函数只能在{...}中调用  
//     var modules={};
//     function define(name,deps,impl){
//         for(var i=0;i<name.length;i++){
//             deps[i]=modules[deps[i]];
//         }
//         modules[name]=impl.apply(impl,deps);
//     }
//     function get(name){
//         return modules[name];
//     }
//     return{
//         getdefine:define,
//         getget:get
//     }
// })();
// modules.getdefine("bar",[],function(){
//     function hello(){
//         return "let me introduce";
//     }
//     return{
//         gethello:hello
//     };
// });
// console.log(modules.getget("bar").gethello());

// const value=()=>"qiuzaij"


// console.log(value());

// var numbers = [4, 9, 16, 25];
// function myFunction() {

//     console.log(numbers.map(Math.sqrt));//可在变量中加入排序方法 Math.sqrt

// 	numbers.map((a,b,c)=>{
// 		console.log("值为："+a+",序号为："+b+",该数组对象为："+c);

//     });
// }
// myFunction();

class Car {
    constructor() {
        this.id = 8;
    }
}

var obj = {
    id: 1,
    name: 'qzj',
    age: 15
}
obj.num = 45;
//Object.defineProperty(obj, prop,descriptor)
Object.defineProperty(obj, 'id', {
    //有这个变量则修改  没有这个则添加
    value: '修改的值',
    //默认值为 false
    writable: false, //设置id不能被修改  固定唯一   writable: true则为可修改
    //enumerable 为false 则不允许遍历 默认为false
    enumerable: true,
    //configurable 为false 则不允许删除这个属性 默认为false
    configurable: true
})
obj.id = 9;
console.log(obj);

// var car = new Car();
// Object.defineProperty(car, car.id, {
//     writable: false
// })
// car.id = 966;
// console.log(car)