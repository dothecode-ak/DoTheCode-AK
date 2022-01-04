class Car {
    constructor(car_name, model, price) {
        this.car_name = car_name;
        this.model = model;
        this.price = price;
    }
    getDetails() {
        return `All car details- Car Name- ${this.car_name} , Model-${this.model}, Price- ${this.price}`
    }
    static address() {
        return 'Address- Ballia';
    }
}

let carData = new Car('Audi', 2019, '7000$');
let carData2 = new Car('Honda', 2018, '900$')

console.log(carData.getDetails());
console.log(carData2.getDetails());
console.log(Car.address());