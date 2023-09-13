"use strict";

//Task 1
function isString(str, cb) {
  if (typeof str === "string" && typeof cb === "function") {
    return cb(str);
  } else {
    throw new Error("Це не стрічка або колбек не є функцією");
  }
}
isString("Meow!", (str) => console.log(str));

//Task 2

function clock() {
  const id = setInterval(() => {
    const time = new Date();
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");

    const formattedDate = hours + ":" + minutes + ":" + seconds;
    console.log(formattedDate);
  }, 1000);
  return id;
}
const id = clock();
setTimeout(() => clearInterval(id), 3000);

//Task 3

function timer(num) {
  const timerId = setInterval(() => {
    if (num === 0) {
      clearInterval(timerId);
    }
    console.log(`Timer: ${num}`);
    num -= 1;
  }, 1000);
  return timerId;
}

const timerId = timer(4);

//Task 4

class Bomb {
  constructor() {
    this.key = "Kitty";
    this.id = null;
    this.blast();
  }
  blast() {
    const id = setTimeout(() => {
      this.id = id;
      this.key = null;
      console.log("BAAAAAAAM!!!!");
    }, 5000);
    this.id = id;
  }
  defuse() {
    clearTimeout(this.id);
    console.log("Bomb has been defused :)");
  }
}

const newBomb = new Bomb();
newBomb.defuse();
