class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getInfo() {
        return `Name:- ${this.name}, Age:- ${this.age}, Salary:- ${this.salary} RS.`
    }
}

class Manager extends Employee {
    getInfo() {
        let hike_amount = 7000;
        let pa = 300;
        let totalSalary = this.salary + hike_amount + pa;
        return `Name:- ${this.name}, Age:- ${this.age}, Salary:- ${totalSalary} RS.`
    }
}

let hiked_user = new Manager('Anil', 28, 200000);
let emp_user = new Employee('Sunil', 25, 27000)
console.log(hiked_user.getInfo());
console.log(emp_user.getInfo());