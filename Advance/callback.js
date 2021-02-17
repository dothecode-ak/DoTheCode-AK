function anil() {
    console.log("I am Anil Kumar Yadav");
}

function checkAnil(callback) {
    callback();
}

checkAnil(anil);

///other 

function callbackFn(callback) {
    callback();
}
callbackFn(function () {
    console.log('I am Anil');
});


// with parametter

function a(num) {
    console.log("This is odd number: " + num)
}
function numberCheck(callback) {
    var n = 9;
    callback(n);
}

numberCheck(a);

//optimized

function n2Check(callback) {
    var c = 10;
    callback(c);
};
n2Check(c => console.log("This is Even number: " + c));// using array function 


//Type of callback function
//1. Synchronous 
//2. Asynchronous


//1.


function synchFn(callback) {
    var s = 'V2';
    callback(s);
}
synchFn(s => console.log('this is sync func with callback ' + s));

console.log("Sync End");

//2. 


setTimeout(function () {
    console.log('this is asnyc fn with call back')
}, 2000);

console.log("Close Async");