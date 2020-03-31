function hongbao(total, num) {
    total = total * 100
    let totalcollect = total - num * 3;
    const arr = [];
    for (let i = 0; i < num; i++) {
        totalcollect = totalcollect + 3;
        let money = suiji(totalcollect);
        totalcollect = totalcollect - money
        arr.push(money / 100);
        //随机算法 total num  return money
    }
    return arr;
}

function suiji(maxmoney) {
    let money = Math.floor(Math.random() * (maxmoney) + 3);
    return money;
}
console.log(hongbao(5, 40));