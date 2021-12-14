class Shape{ //base class parent
    Area:number;

    constructor(a:number){
        this.Area=a;
    }
}
class Circle extends Shape{ //child class or derived class
    disp():void{
        console.log("Area of circle is"+this.Area);
    }
}

var Obj=new Circle(22);
Obj.disp();