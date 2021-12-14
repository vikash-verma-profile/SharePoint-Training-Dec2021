class Person {
  age: Number;
  Greet() {
    console.log("Say Hello");
  }
  setAge(age: Number) {
    this.age = age;
  }
}
class Student extends Person {
  Study(): void {
    console.log("I'm studying");
  }
  ShowAge(): void {
    console.log("My age is : " + this.age);
  }
}
class Teacher extends Person {
  Explain(): void {
    console.log("I'm explaining");
  }
}

var person = new Person();
person.Greet();
var student = new Student();
student.setAge(10);
student.Greet();
student.ShowAge();
var teacher = new Teacher();
teacher.setAge(40);
teacher.Greet();
teacher.Explain();
