//构造函数问题
function peoples(username, userage) {
    this.name = username;
    this.age = userage;
}

let people = new peoples('lucy', 20);
console.log(people.prototype)
console.log(people.prototype.__proto__)
console.log(people)