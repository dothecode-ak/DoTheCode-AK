var a = 10, b = 20;
//logic 1
a = a + b;//30
b = a - b;//10
a = a - b;//20
console.log("swap value of a=", a, "swap value of b", b);

//logic 2
var c = 20, d = 40;
c = c ^ d;
d = c ^ d;
c = c ^ d;
console.log("swap value of c=", c, "swap value of d", d);

//logic 3
var e = 30, f = 40;
e = (e + f) - (f = e);//70-30=40
console.log("swap value of e=", e, "swap value of f", f);

//logic 4
var g = 50, k = 60;
g = (g * k) / (k = g);//50*60/50=60
console.log("swap value of g=", g, "swap value of k", k);
