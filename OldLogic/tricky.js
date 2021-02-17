var mainArr = [{ productName: "oil", price: 450, companyName: "Uniliver" },
{ productName: "Disel", price: 50, companyName: "Reliance" },
{ productName: "Petrol", price: 75, companyName: "Reliance" },
{ productName: "Lpg", price: 450, companyName: "TCS" }];

var rand = mainArr[(Math.random() * mainArr.length) | 0]
console.log(mainArr.length);

console.log(rand.price);