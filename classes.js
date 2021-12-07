class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    setPhone(PhnNum){
        this.PhnNum = PhnNum;
    };
    getPhone(PhnNu){
        return this.PhnNum;
    };
};

Person1 = new Person('Divya',32);
Person2 = new Person('Disha',3);

console.log(Person1.name);
console.log(Person1.age);
console.log(Person2.name);
console.log(Person2.age);

Person1.setPhone(123456789);
console.log(Person1.getPhone());