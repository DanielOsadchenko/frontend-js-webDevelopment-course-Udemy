"use strict";

//Task 1
function Calculator() {}
Calculator.prototype.sum = (a, b) => console.log(a + b);
Calculator.prototype.subtract = (a, b) => console.log(a - b);

console.dir(Calculator);

function AdvancedCalculator() {}
AdvancedCalculator.prototype = Object.create(Calculator.prototype);
Calculator.prototype.multiply = (a, b) => console.log(a * b);
Calculator.prototype.divide = (a, b) => console.log(a / b);
console.dir(AdvancedCalculator);

const calc = new AdvancedCalculator();

calc.sum(1, 2);
calc.subtract(1, 2);
calc.multiply(1, 2);
calc.divide(1, 2);

//Task 2

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

class ToDoItem {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.checked = false;
  }

  get isChecked() {
    return this.checked;
  }

  set isChecked(prop) {
    if (typeof prop === "boolean") {
      this.checked = prop;
    }
  }
}

class ToDoList {
  constructor(name) {
    this.id = generateId();
    this.name = name;
    this.items = [];
  }

  addItem(item) {
    if (item.id) {
      this.items.push(item);
      console.log(this.items);
    }
  }

  removeItemById(id) {
    console.log(this.items.find((item) => item.id === id));
    this.items = this.items.filter((item) => item.id !== id);
  }

  getItemById(id) {
    console.log(this.items.find((item) => item.id === id));
    return this.items.find((item) => item.id === id);
  }
}
const list = new ToDoList("myToDoList");

const toDo1 = new ToDoItem("1", "1");
const toDo2 = new ToDoItem("2", "2");
const toDo3 = new ToDoItem("3", "3");
const toDo4 = new ToDoItem("4", "4");

list.addItem(toDo1);
list.addItem(toDo2);
list.addItem(toDo3);
list.addItem(toDo4);

toDo2.isChecked = true;

list.removeItemById("3");
list.removeItemById("4");

console.log(list.items);
