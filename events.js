// let events = require('events');

// let eventEmitter = new events.EventEmitter();

// eventEmitter.on('SendSms',function(){
//    console.log("Message is sent");
// });

// eventEmitter.emit('SendSms');

let events = require('events');
let util = require('util');

let Person = function(name) {
    this.name = name;
}

let John = new Person("John");
let Mary = new Person("Mary");

util.inherits(Person,events.EventEmitter);

// John.on("SendMsg",function(msg){
//     console.log(msg);
// });

let people = [John,Mary];

people.forEach(function(tempPerson){
    tempPerson.on("SendMsg",function(msg){
            console.log(msg);
    });
});

John.emit("SendMsg","Hi");
Mary.emit("SendMsg","How are you");