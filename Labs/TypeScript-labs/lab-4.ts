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

class Car{
    //field
    engine:string="BS6";
    //function
    display():void
    {
        console.log("The value of engine is "+this.engine);
        //return 1;
    }
}

var obj=new Car();
obj.display();