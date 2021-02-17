
var arr1 = [1, 3, 5, 7, 9, 11, 13, 15];
for (var i = 0; i < arr1.length; i++) {
    for (var j = i + 1; j < arr1.length; j++) {
        for (var k = i + 2; k < arr1.length; k++) {
            if (arr1[i] + arr1[j] + arr1[k] == 30) {
                console.log(arr1[i], arr1[j], arr1[k]);
            }
        }

    }



}
