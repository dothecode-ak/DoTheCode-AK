var g;
function gTest() {

    var t2 = setTimeout(() => {
        var g = 10;
        console.log("dwde", g);
    }, 1000)
}
gTest();
console.log(t2);