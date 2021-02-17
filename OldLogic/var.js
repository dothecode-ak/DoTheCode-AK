

//case 1
var value1 = 50;
(function f1() {
    console.log(value1);
})();


//case 2
let value2 = 10;
(function f2() {
    console.log(value2);

})();

//case 3
// (function f3() {
//     let value3 = 80;

// })();
// console.log(value3);

//case 4
// (function f4() {
//     var value4 = 60;
// })();
// console.log(value4);

//case 5
var m = 100;
if (m == 100) {
    console.log("same value=" + m);
    var o = 40;
}
else {
    console.log("not same");
}
console.log(o);
// case 6
let n = 50;
if (n == 50) {
    console.log("same value" + n);
    let p = 90;
    console.log(p);
    console.log(n);
}
else {
    console.log("not same equal to 50");
}

// let use only blocking

