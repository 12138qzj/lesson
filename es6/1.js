const ages = [32, 15, 19, 12];
const nums = [];
for (let age of ages) {
    if (age >= 18) {
        nums.push(age);
    }
}
console.log(nums)

console.log('filter', ages.filter((ages) => ages > 18));

let some = ages.some((age) => age >= 18); //是否存在这个条件的数据  存在返回true

console.log('some', some)