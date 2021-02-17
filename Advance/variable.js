var a = 10;
let b = 20;
const num = 100;
console.log('This is the var variable=' + a + "  " + 'This the let variable=' + b);

console.log('const value ' + num);
//function

function myVar() {
    var c = 40;
    if (true) {
        var c = 50;
        console.log('var scope ' + c)
    }
    console.log('outer scope ' + c);
}

myVar();


function myLet() {
    let c = 40;
    if (true) {
        let c = 50;
        console.log('Let scope ' + c)
    }
    console.log('outer scope Let ' + c);
}

myLet();