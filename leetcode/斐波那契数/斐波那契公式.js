/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {


    return (1 / Math.sqrt(5) * ((Math.pow(((1 + Math.sqrt(5)) / 2), N)) - (Math.pow(((1 - Math.sqrt(5)) / 2), N))));
};
console.log(fib(4));