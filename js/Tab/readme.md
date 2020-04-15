- 构造函数的问题 
  1. 实例成员  在函数内部 定义 this.name 
  2. 静态成员  根据函数名定义 Pepoer.sex='男'
    
    问题  定义对象会另外开辟空间 不会空间复用

- 构造函数 原型 prototype
    1. 函数名.prorotype.sing=function(){
        consolo.log("我会唱歌")
    }
    2. 每一个对象都存在的对象 可以复用数据  只开辟一个内存空间
    3. 对象身上系统会自动添加 _proto_ 指向原型对象 prototype
    4. prototype 是一个非标准的属性  不能赋值
- constructor 构造函数
    1. constructor是一个原型属性
