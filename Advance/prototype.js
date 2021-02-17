var Mobile = function (mobile_no) {
    //instance member
    this.mobile_no = mobile_no
    this.price = 12000;
}
var samsung = new Mobile('Glaxy');
var nokia = new Mobile('5233');

//prototype member
Mobile.prototype.color = 'Black';
console.log(nokia.price);