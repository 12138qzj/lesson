const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];


let a = [];
inventors.forEach(function(one) { //数组循环  不返回数值

    if (one.year === 1879) {

        a.push(one);
    }

})


let b = inventors.filter((one) => {
    if (one.year === 1879) {
        return one;
    }
})

let c = inventors.find((one) => {
    if (one.year === 1815) {
        return 19;
    }

})

let e = inventors.find(() => {
    return 0;
})

let invent = [1, 2, 3, 4]
let d = invent.map((one /*元素*/ , index, my) => {
    //console.log(one, index, my)
    return one * 2;
})
console.log(e);