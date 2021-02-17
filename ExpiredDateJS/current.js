//current date
//0 is representing jan month
var currentFullDate = new Date();
console.log(currentFullDate);
//for getting date string
var dd = currentFullDate.getDate();
var month = currentFullDate.getMonth();
var year = currentFullDate.getFullYear();
console.log(month);
var currentFinalDate = dd + '' + month + '' + year;
console.log(currentFinalDate);
//getting time
var hs = currentFullDate.getHours();
var min = currentFullDate.getMinutes();
var sec = currentFullDate.getSeconds();
var currentFinalTime = hs + '' + min + '' + sec;
console.log(currentFinalTime);

//set time for expired at url
var setExpireDate = 1702020;
var setExipreTime = 135525;
if (currentFinalDate >= setExpireDate && currentFinalTime >= setExipreTime) {
    console.log("Congratulations for expired url !");
}
else {
    console.log("false");
}

for (var i = 1; i <= 280; i++) {
    if (i % 9 == 0) {
        console.log(i + ",")
    }
}