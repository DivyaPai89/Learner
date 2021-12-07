function Hello(name){
    let printMessage = function(message){
        console.log(message + ' ' + name);
    }
    return printMessage;
}

let func1 = new Hello("Divya");
func1("Hello");

