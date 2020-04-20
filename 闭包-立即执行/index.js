var car = (function() {
    var price = 13;
    var total;
    return {
        price: function(n) {
            if (n > 3) {
                total = price + (n - 3) * 5;
                return total;
            }
        },
        blockup: function() {

        }
    }
})(); //car中的匿名函数为立即执行函数  直接return函数给car，

console.log(car.price(8)); //price中使用了外层function中的 price和total变量  所以外层function为闭包