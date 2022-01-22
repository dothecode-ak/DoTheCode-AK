//for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
var array = [1, 2, 3, 5]
array.forEach((element, index) => {
    if (index == 3) {
        element = 9
    }
    console.log(element);
});