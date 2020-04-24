var a = 'mitcmu';
var b = 'mtacnu';
var l = 10000;
var lwstBT = function(i, j, edist) {
    if (i == a.length || j == b.length) {
        if (i < a.length)
            edist = edist + a.length - j;
        if (i > b.length)
            edist = edist + b.length - i
        if (edist < l) {
            l = edist;
        }

        return;
    }
    console.log(i, j)

    if (a[i] == b[j]) {
        lwstBT(i + 1, j + 1, edist);

    } else {
        console.log("fgsad")
        lwstBT(i + 1, j, edist + 1);
        lwstBT(i, j + 1, edist + 1);
        lwstBT(i + 1, j + 1, edist + 1);
    }
}
lwstBT(0, 0, 0);
console.log(l);