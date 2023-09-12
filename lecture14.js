"use strict";

// Task 1

function unicFn(initialArray) {
  let unicValues = [];
  initialArray.forEach((value) => {
    if (!unicValues.includes(value)) {
      unicValues.push(value);
    }
  });
  console.log(unicValues);
}

unicFn([1, 1, 2, 3, 3, 2]);

// Task 2

function isEvenArray(initialArray) {
  if (initialArray.every((value) => value % 2 === 0)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

isEvenArray([1, 2, 3, 9]);
isEvenArray([2, 4, 6]);

// Task 3

function filterArray(initialArray) {
  const onlyStringArray = initialArray.filter(
    (value) => typeof value === "string"
  );
  console.log(onlyStringArray);
}
filterArray([2, "string", 3, , , "test"]);

// Task 4

function findUser(initialObject) {
  const users = Object.entries(initialObject).filter(
    (user) => user[1].age > 18 && user[1].city === "London"
  );
  const usersNamesList = users.map((user) => user[0]);
  console.log(usersNamesList);
}

findUser({
  Max: { age: 23, city: "London" },
  Mike: { age: 20, city: "NY" },
});

// Task 5

function removeObj(arrayOfObj, keyName, value) {
  const newArray = arrayOfObj.filter((obj) => !(obj[keyName] === value));
  console.log(newArray);
}

const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
removeObj(arr, "age", 2);
removeObj(arr, "year", 2);
