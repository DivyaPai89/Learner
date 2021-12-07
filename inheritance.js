class Car {
    setDetails(color){
        this.color = color;
    }
     
};

class Toyota extends Car{
    setName(name){
        this.name = name;
    }
    getColor(){
        return this.color;
    }
    getName(){
        return this.name;
    }
};

Car1 = new Toyota;
Car1.setName('Cruiser');
Car1.setDetails('Red');
console.log(Car1.getColor());
console.log(Car1.getName());