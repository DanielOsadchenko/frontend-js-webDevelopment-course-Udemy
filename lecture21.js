"use strict";

const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

const compose =
  (...functions) =>
  (data) =>
    functions.reduceRight((result, fn) => fn(result), data);

// Реалізуємо функцію modifyArray
const modifyArray = (modifyCondition) => (data) => modifyCondition(data);

// Реалізуємо функцію capitalizeAllFirst
const capitalizeAllFirst = (arr) => {
  const result = arr.map((str) =>
    str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("-")
  );

  const resultString = result.join("-");

  console.log(`Result: ${resultString} length: ${resultString.length}`);
};

// Реалізуємо функцію allToLower
const allToLower = (arr) => {
  const result = arr.map((str) => str.toLowerCase()).join(" - ");
  console.log(`Result: ${result} length: ${result.length}`);
};

const capitalizeAllFirstModified = compose(modifyArray(capitalizeAllFirst));
const allToLowerModified = compose(modifyArray(allToLower));

capitalizeAllFirstModified(arr);
allToLowerModified(arr);
