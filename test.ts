let myName:string = 'Nikhil';
let value:any = 4;
value = 'Soni';
let setName:string[] = ['Nikhil','Deep','Pava'];
let namesAre:any[]=['nikhil',4,true];
enum doorsteps{
    open,
    close,
    ajar
}
function log(val:any){
    console.log(val);
}
log(doorsteps.open);

// Making Function
function tellmeJoke():string{
    return "Welcome we all are joke to corona";

}
log(tellmeJoke());

// Practice
function display():void{
    console.log("Message display succesfully");
}
log(display());

// Function fun
function fun(){
    console.log("It is fun to code in js");
}
log(fun());

// Pipe
let a:string|number;
a='John';
a=4;

// Function of add pipe
function add(num1:string|number,num2:string|number){
    return num1.toString()+num2.toString();
}
log(add(1,2));

// adding two numbers
function addNum(num1:number,num2:number):number{
    return num1+num2;
}
log(addNum(1,5));

// Type aliases
type nikhil=string|number;
let b:nikhil;
b='nikhil';
log(b);

// anonymous function
// Function which do not have their now name;
var addString = function(a:string,b:string):string{
    return a+b;
}
log(addString('Nikhil',' Soni'));

// Prac
function fact(n:number):number{
    if(n==1){
return 1;
    }
    else{
        return n*fact(n-1);
    }
}
log(fact(6));

// Optional parameters
function opt(a:string,b?:string):string{
    return a+b;
}
log(opt('Nikhil'));

// Default paramters
function makeItDefault(a:string,b:string="soni"){
return a+b;
}
log(makeItDefault('Nik'));

// Remainings Parameters
function built(a:string,...b:string[]){
    return a+b;
}
let personBuilt = built('Nikhil','soni','shah','patel');
log(personBuilt);

// demo
function maker(word:string){
    console.log(word);
}
log(maker('This is was my sentences'));

// Interfaces
interface A{
    id:number;
    name:string;
}
let B:A={
    id:1,
    name:'Alex'
};

// Classes
class Car{
    id:number;
    print():void{
        console.log(`My name is Nikhil and my id is : ${this.id}`);
        // console.log("Function is getting called");
        // console.log(`Car.print() called`)
    }
}
let Car1=new Car();
Car1.id=101;
Car1.print();

// Practicing again
class Bike{
    name:string;
    display(name:string):void{
        this.name=name;
        console.log(name);
    }
}
let Bike2=new Bike();
Bike2.display('Alex is my name');

// Classes implements interface
interface Ex{
    print();
}
class S implements Ex{
    print(){
        console.log("Classes are implementing interface successfully");
    }
}
class D implements Ex{
    print(){
        console.log("Class D is also implementing interface successfully");
    }
}
let S1=new S();
let D1=new D();
D1.print();
S1.print();

// Classes with constructor
class Box{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
        console.log(id+" "+name);
    }
}
let box=new Box(1,'Nikhil');

// Practicing
class Build{
    // flat:number;
    constructor(flat:number){
console.log(flat);

    }
}
let build=new Build(10000);

// Classes and interface inheritance
interface A{
    id:number;
}
interface B extends A{
    name:string;
}
class Joke implements B{
    id:number;
    name:string;
}

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
class Aa{
    move(){
        console.log("Function is declared to call movements");
    }

}
class Ba extends Aa{
    move(){
   super.move();
   console.log("This is also declared to move");
    }
}
let hike=new Ba();
hike.move();

// Abstract class
// Child implements method of parent class
abstract class Ear{
    abstract print():void;
}
class Earphone extends Ear{
    print():void{
        console.log("Abstraction successfull");
    }
}
let ear = new Earphone();
ear.print();

// Generic class
// T means datatypes can be of any type..
function generic<T>(args:T):T{
    return args;
}
let make =generic('Nikhil');
let makeAnother = generic<boolean>(true);
console.log(makeAnother);

// Enum
enum door{
    open,
    closed,
    ajar
}
console.log(door.ajar);

// Export class
export class Abc{
    a:string;
    b:string;
    constructor(a:string,b:string){
        this.a=a;
        this.b=b;
        console.log(a+" "+b);
    }
}
