function show(a) {

    console.log("welcome india " + a);
}
function test(callback) {
    var a = 159652;
    callback(a)
}
test(show);
// second type
function biet(callback) {
    var b = 2020;
    callback(b)
}
biet(function item(b) {
    console.log("India" + b)
});

//Arrow function
function jhansi(callback) {
    d = 0;
    callback(d);
}
jhansi(d => console.log("i m indian" + d));

//Synchronous function in callback
function test4(callback) {
    var e = 9293;
    callback(e)
}
test4(e => console.log("Alivenow" + e)
);
console.log("End");

//Asynchonous
setTimeout(function test5() {
    console.log("ASyncho");
}, 5000);
console.log("Asynch End");

//async function
async function test7() {
    console.log("India");
};
test7();
console.log("End Async6");