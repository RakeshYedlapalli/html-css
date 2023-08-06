let string =`hello 
what are you 
doing



Hell`;

"use strict";
let name = "rakesh";
let dob = "939-303";
console.log(`Accessing -> ${name} and ${dob}`);

let re = string.replace(/Hello/g,"Hi");

console.log(re);


let arr =[2,3,4,5,6];
console.log(arr[0]);
arr[0] = 40030;
console.log(arr[0]);



const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}

console.log("Hoister practice");

 carName = "Volvo";
console.log("Value is ->"+carName);
//let carName;




//console.log();
//var fullName;
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }

  };
  console.log("Full name is->"+person.fullName());

//var rakesh;

class Car{


    constructor(name,model){
      this.name = name;
      this.model = model;
    }
  
  
  }
const car = new Car("BMC","99e9");
console.log(car.name);



var value = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
    }
    var rakeshY;
    var f = function(){
       rakeshY = "rakesh";
    
    }

    f();
    console.log("Function value is =>"+ rakeshY);

    console.log("JSONO is ->");
    console.log(value.employees[0].firstName);
    
