class Father {
    constructor() {
        this.name = 'qzj';
    }
    Say() {
        return '我是爸爸';
    }
}
class Son extends Father {



    Say() {

        return '我是儿子';
    }
    F() {
        return super.Say();
    }
}

var f1 = new Father();
var s1 = new Son();

console.log(s1.F());
console.log(f1.name);