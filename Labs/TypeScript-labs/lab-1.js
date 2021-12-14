/*
var message:string="Hello";
console.log(message);

//is an example of union
var val:string | number
val=12;
console.log(val);
val="Hello i am union";
console.log(val);

*/
display("Vikash Verma");
display(["Mark", "John"]);
function display(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        for (var i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
//tuples
//unions
//interfaces
//classes
//objects
