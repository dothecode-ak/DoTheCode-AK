class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} make a moise`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    speak() {
        console.log(`${this.name} barks`)
    }
}


let d = new Dog('Danger');
let c = new Animal('Crazy Dog')
d.speak();
c.speak();