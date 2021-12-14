//
/* class class-name
    {
        1.Fields--class variables
        2.constructor
        3.Function-class functions
    }
*/
// class Car{
//     //field
//     engine:string;
//     //constructor
//     constructor(_engine:string){
//         this.engine=_engine;
//     }
//     //function
//     display():void
//     {
//         console.log("The value of engine is "+this.engine);
//     }
// }
var Car = /** @class */ (function () {
    function Car() {
        //field
        this.engine = "BS6";
    }
    //function
    Car.prototype.display = function () {
        console.log("The value of engine is " + this.engine);
    };
    return Car;
}());
var obj = new Car();
obj.display();
