"use strict";
// Task 1

// write below code for global scope
const globalVar = true;
function globalVarCheck() {
  console.log(globalVar);
}
globalVarCheck();
// write below code for function scope
function functionVarCheck() {
  const functionVar = "I`m in function";
  console.log(functionVar);
}
functionVarCheck();
// console.log(functionVar); Don`t work :(

// write below code for block scope

function blockVarCheck() {
  {
    const blockVar = "I`m in block";
    console.log(blockVar);
  }
  // console.log(blockVar); Don`t work:(
}
blockVarCheck();

// Task 2

const car = {
  name: "Tesla",
  model: "X",
};

function showCarInfo() {
  console.log(this.name + this.model);
}

showCarInfo.bind(car)();

//Task 3

const cat = {
  sound: "meow",
  greet: function () {
    setTimeout(
      function () {
        console.log(this.sound);
      }.bind(this)
    );
  },
};
cat.greet(); // should produce "meow"

//Task 4

const dog = {
  sound: "bark",
  greet: function () {
    setTimeout(() => {
      console.log(this.sound);
    }, 0);
  },
};

dog.greet();

// Task 5

let convert = (b) => {
  console.log(`${b / 1000000} Mb`);
};

convert.call(null, 10000);

//Task 6

const Person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  },
};

const testArgs = ["sushi", "hiking"];

let logPersonNameAndInterests = function (...interests) {
  console.log(`${this.getFullName()} loves ${interests.join(", ")}`);
};

logPersonNameAndInterests.apply(Person, testArgs);
