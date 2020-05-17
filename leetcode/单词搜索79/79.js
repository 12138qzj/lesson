/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * @author qzj
 * @date 2020-05-17
 */
let board = [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
    ],
    word = "ABFCCBF";
var exist = function(board, word) {

    let bool = false;
    let pres = {
        j: -1,
        i: -1
    }
    let wordleng = word.length;
    let outleng = board.length - 1;
    let inleng = board[0].length - 1;
    if (wordleng == 0 || outleng == 0 || inleng == 0) {
        return false;
    }
    for (let j = 0; j <= outleng; j++) {
        for (let i = 0; i <= inleng; i++) {
            console.log("匹配", board[j][i], j, i)

            if (word[0] == board[j][i]) {
                console.log("进入");
                backracall(j, i, 1);

                pres.i = i;
                pres.j = j;
                let temp = board[j][i];
                board[pres.j][pres.i] = false;

                if (bool) {
                    console.log("匹配成功出来了啊")
                    return true;
                }
            }
        }
    }

    function backracall(j, i, k) {
        if (k >= wordleng) {
            console.log('出来啦不能在循环了')
            bool = true;
            return true;
        }


        console.log(board)
        if (j < outleng) {
            console.log("向下进入", k, j, i, pres.i)

            //j++; //向下
            if (word[k] == board[j + 1][i]) {
                if ((pres.i == i && pres.j == j)) {

                } else {
                    console.log("向下匹配成功", k)
                    pres.i = i;
                    pres.j = j + 1;
                    if (pres.j != -1 && pres.i != -1) {
                        let temp = board[j][i];
                        board[pres.j][pres.i] = false;
                    }
                    backracall(j + 1, i, k + 1);
                    // return;
                }
            } else {
                //  j--;
            }
        }
        if (j > 0) {
            console.log("向上进入", k, j, i, pres.i)

            // j--; //向上
            if (word[k] == board[j - 1][i]) {
                if ((pres.i == i && pres.j == j)) {

                } else {
                    pres.i = i;
                    pres.j = j - 1;
                    if (pres.j != -1 && pres.i != -1) {
                        let temp = board[j][i];
                        board[pres.j][pres.i] = false;
                    }
                    backracall(j - 1, i, k + 1);
                    //return;
                }
            } else {
                // j++;
            }
        }
        if (i < inleng) {
            // i++; //向右
            console.log("向右进入", k, j, i, pres.i)

            if (word[k] == board[j][i + 1]) {

                if ((pres.i == i && pres.j == j)) {

                } else {
                    console.log("向右匹配成功", k)
                    pres.i = i + 1;

                    pres.j = j;
                    if (pres.j != -1 && pres.i != -1) {
                        let temp = board[j][i];
                        board[pres.j][pres.i] = false;
                    }
                    backracall(j, i + 1, k + 1);
                    // return;
                }

            } else {
                // i--;
            }

        }
        if (i > 0) {
            //i--;
            console.log("向左边匹配景区", k, j, i, pres.i)

            if (word[k] == board[j][i - 1]) {
                if ((pres.i == i && pres.j == j)) {

                } else {
                    console.log("向左边匹配成功", k)

                    pres.i = i - 1;
                    pres.j = j;
                    if (pres.j != -1 && pres.i != -1) {
                        let temp = board[j][i];
                        board[pres.j][pres.i] = false;
                    }
                    console.log("向左边匹配成功2ci weizhi ", k)
                    backracall(j, i - 1, k + 1);
                    // return;
                }
            } else {
                //i++;
            }
        } else {
            return false
        }

    }
    return bool;
};
console.log(exist(board, word))