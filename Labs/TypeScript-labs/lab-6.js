var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.Greet = function () {
        console.log("Say Hello");
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.Study = function () {
        console.log("I'm studying");
    };
    Student.prototype.ShowAge = function () {
        console.log("My age is : " + this.age);
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.Explain = function () {
        console.log("I'm explaining");
    };
    return Teacher;
}(Person));
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
