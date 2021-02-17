function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var arr = [2, 11, 37, 42];
var arr2 = [];
arr = shuffle(arr);
for (var i = 0; i < 2; i++) {
    arr2.push(arr[i]);
    // console.log(arr[i]);
}
console.log(arr);
console.log(arr2);