var g = 3;
function main() {
    var a = 1;
    console.log("This is main function " + a);
    console.log('This is the global accces ' + g)
    function child() {
        var b = 2;
        console.log('This is child function ' + b);
        console.log('this is main access the value ' + a);
        console.log('This is the global value ' + g)
    }
    child();
    // console.log('child value access in main function' + b);// undefined
}
main();


"use strict"
function log() {
    this.desc = "Anil Text";
    console.log(this)
}
new log();