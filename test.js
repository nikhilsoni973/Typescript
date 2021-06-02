"use strict";
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
exports.__esModule = true;
exports.Abc = void 0;
var myName = 'Nikhil';
var value = 4;
value = 'Soni';
var setName = ['Nikhil', 'Deep', 'Pava'];
var namesAre = ['nikhil', 4, true];
var doorsteps;
(function (doorsteps) {
    doorsteps[doorsteps["open"] = 0] = "open";
    doorsteps[doorsteps["close"] = 1] = "close";
    doorsteps[doorsteps["ajar"] = 2] = "ajar";
})(doorsteps || (doorsteps = {}));
function log(val) {
    console.log(val);
}
log(doorsteps.open);
// Making Function
function tellmeJoke() {
    return "Welcome we all are joke to corona";
}
log(tellmeJoke());
// Practice
function display() {
    console.log("Message display succesfully");
}
log(display());
// Function fun
function fun() {
    console.log("It is fun to code in js");
}
log(fun());
// Pipe
var a;
a = 'John';
a = 4;
// Function of add pipe
function add(num1, num2) {
    return num1.toString() + num2.toString();
}
log(add(1, 2));
// adding two numbers
function addNum(num1, num2) {
    return num1 + num2;
}
log(addNum(1, 5));
var b;
b = 'nikhil';
log(b);
// anonymous function
// Function which do not have their now name;
var addString = function (a, b) {
    return a + b;
};
log(addString('Nikhil', ' Soni'));
// Prac
function fact(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}
log(fact(6));
// Optional parameters
function opt(a, b) {
    return a + b;
}
log(opt('Nikhil'));
// Default paramters
function makeItDefault(a, b) {
    if (b === void 0) { b = "soni"; }
    return a + b;
}
log(makeItDefault('Nik'));
// Remainings Parameters
function built(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    return a + b;
}
var personBuilt = built('Nikhil', 'soni', 'shah', 'patel');
log(personBuilt);
// demo
function maker(word) {
    console.log(word);
}
log(maker('This is was my sentences'));
var B = {
    id: 1,
    name: 'Alex'
};
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.print = function () {
        console.log("My name is Nikhil and my id is : " + this.id);
        // console.log("Function is getting called");
        // console.log(`Car.print() called`)
    };
    return Car;
}());
var Car1 = new Car();
Car1.id = 101;
Car1.print();
// Practicing again
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.display = function (name) {
        this.name = name;
        console.log(name);
    };
    return Bike;
}());
var Bike2 = new Bike();
Bike2.display('Alex is my name');
var S = /** @class */ (function () {
    function S() {
    }
    S.prototype.print = function () {
        console.log("Classes are implementing interface successfully");
    };
    return S;
}());
var D = /** @class */ (function () {
    function D() {
    }
    D.prototype.print = function () {
        console.log("Class D is also implementing interface successfully");
    };
    return D;
}());
var S1 = new S();
var D1 = new D();
D1.print();
S1.print();
// Classes with constructor
var Box = /** @class */ (function () {
    function Box(id, name) {
        this.id = id;
        this.name = name;
        console.log(id + " " + name);
    }
    return Box;
}());
var box = new Box(1, 'Nikhil');
// Practicing
var Build = /** @class */ (function () {
    // flat:number;
    function Build(flat) {
        console.log(flat);
    }
    return Build;
}());
var build = new Build(10000);
var Joke = /** @class */ (function () {
    function Joke() {
    }
    return Joke;
}());
// Super KeyWord
// class A{
//     private keyId:number;
//     constructor(_id:number){
//      this.keyId=_id; 
//     }
// }
// class Bob extends A{
//     private KeyName:string;
//     constructor(_id:number,_name:string){
//         super(_id);
//         this.KeyName=_name;
//     }
// }
// Super keyword
var Aa = /** @class */ (function () {
    function Aa() {
    }
    Aa.prototype.move = function () {
        console.log("Function is declared to call movements");
    };
    return Aa;
}());
var Ba = /** @class */ (function (_super) {
    __extends(Ba, _super);
    function Ba() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ba.prototype.move = function () {
        _super.prototype.move.call(this);
        console.log("This is also declared to move");
    };
    return Ba;
}(Aa));
var hike = new Ba();
hike.move();
// Abstract class
// Child implements method of parent class
var Ear = /** @class */ (function () {
    function Ear() {
    }
    return Ear;
}());
var Earphone = /** @class */ (function (_super) {
    __extends(Earphone, _super);
    function Earphone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Earphone.prototype.print = function () {
        console.log("Abstraction successfull");
    };
    return Earphone;
}(Ear));
var ear = new Earphone();
ear.print();
// Generic class
// T means datatypes can be of any type..
function generic(args) {
    return args;
}
var make = generic('Nikhil');
var makeAnother = generic(true);
console.log(makeAnother);
// Enum
var door;
(function (door) {
    door[door["open"] = 0] = "open";
    door[door["closed"] = 1] = "closed";
    door[door["ajar"] = 2] = "ajar";
})(door || (door = {}));
console.log(door.ajar);
// Export class
var Abc = /** @class */ (function () {
    function Abc(a, b) {
        this.a = a;
        this.b = b;
        console.log(a + " " + b);
    }
    return Abc;
}());
exports.Abc = Abc;
