 const UUID = require('uuid');
 class wallet {

     constructor() { //构造函数里面的声明
         this._id = UUID.v1().replace(/-/g, "");
         console.log(this._id);
         this.time = +new Date();
         // console.log(this.time.getDay(), this.time.getHours(), this.time);
         console.log(this.time);
     }
     getId() {
         return this._id;
     }
     setId() {
         throw new Error('该属性不能被修改');
     }
 }

 const user = new wallet();
 console.log(user._id); //id为user 的公共(public)属性
 console.log(user.time)