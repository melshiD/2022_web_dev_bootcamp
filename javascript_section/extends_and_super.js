class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
        console.log('leaving Animal constructor');
    }
    eat(){
        return `${this.name} is eating`;
    }
}

class Cat extends Animal{
    constructor(name, age, livesLeft = 9){
        super(name, age);
        this.livesLeft = livesLeft;
        console.log('leaving Cat constructor');
    }
    meow(){
        return 'MEOWWWW';
    }
}

class Dog extends Animal{
    woof(){
        return 'WOOF and BARK!';
    }
}

const Ziva = new Dog('Ziva', 1.4);
const Zoro = new Cat('Zoro', 43, 5);
console.log(Zoro);