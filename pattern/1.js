//logic
// print the pattern
// * * * * *
// * * * * 
// * * * 
// * * 
// * 

for (var i = 0; i < 5; i++) {
    for (var j = i; j < 5; j++) {
        document.write("*");
    }
    document.write('<br/>')

}

//pattern 2
//1 1 1 1 1
//2 2 2 2
//3 3 3
//4 4
//5

for (var k = 1; k <= 5; k++) {
    for (var m = k; m <= 5; m++) {
        document.write(k);
    }
    document.write("<br/>")
}


//pattern 3
for (n = 1; n <= 5; n++) {
    for (var z = n; z <= 5; z++) {
        document.write(z);
    }
    document.write("<br/>")
}