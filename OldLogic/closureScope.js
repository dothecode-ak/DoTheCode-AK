function f1() {
    var a = 10;
    function f2() {
        var b = 20;
        console.log(b);
        console.log(a);
    }
}

f1();
console.log(a);