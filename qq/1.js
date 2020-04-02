let nums = "2442319903";

let arr = [];

arr.push(nums[0]);

let char = nums[1];
nums = nums.substring(2); /*去除几个字符*/
nums += char;
console.log(nums, arr); //
// console.log(nums.slice(1, 3)); //nums.slice(start, end) 切割字符串