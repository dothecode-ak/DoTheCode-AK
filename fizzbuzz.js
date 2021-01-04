// build the logic

// var number = 9;
var num = [1, 2, 3, 4, 5, 15];
num.forEach(e => {
    if (e % 3 == 0 && e % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (e % 3 == 0) {
        console.log("Fizz");
    }
    else if (e % 5 == 0) {
        console.log("Buzz");
    }
});

for (var i = 0; i < num.length; i++) {
    if (num[i] % 3 == 0 && num[i] % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (num[i] % 3 == 0) {
        console.log("Fizz");
    }
    else if (num[i] % 5 == 0) {
        console.log("Buzz");
    }
}