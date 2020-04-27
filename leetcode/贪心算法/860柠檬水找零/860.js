/**
 * @param {number[]} bills
 * @return {boolean}
 * @author qzj
 */
var bills = [5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5];
var lemonadeChange = function(bills) {
    console.log('bills', bills)


    let five = 0,
        ten = 0,
        tten = 0;
    let i = 0;

    while (five > -1 && ten > -1 && tten > -1 && i < bills.length) {

        if (bills[i] == 5) {
            five++;
        } else if (bills[i] == 10) {
            five--;
            ten++;
        } else if (bills[i] == 20) {
            if (ten <= 0) {
                five = five - 3;
            } else {
                ten--;
                five--;
            }
        }
        console.log('i', i)

        console.log('five', five, 'ten', ten, 'tten', tten)
        if (five > -1 && ten > -1 && tten > -1) {
            i++;
        } else {
            return false;
        }

    }



    return true;
};
console.log(lemonadeChange(bills))

// let five = 0,
//     ten = 0,
//     tten = 0,
//     i = 0;
// if (five > -1 && ten > -1 && tten > -1) {
//     console.log('true')
//}

// if (bills.length == 0) {
//     return false;
// }
// if (bills.length == 1) {
//     if (bills[0] > 5) {
//         return false;
//     }
// }

// if (bills.length >= 2) {
//     if (bills[0] > 5 && bills[1] > 10) {
//         return false;
//     }
// }