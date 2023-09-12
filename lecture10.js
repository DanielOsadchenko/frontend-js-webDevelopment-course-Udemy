"use strict";
// Task 1
function printPowsOf2(number) {
  if (typeof number === "number") {
    let i = 1;
    while (i <= number) {
      console.log(i);
      i *= 2;
    }
  } else {
    console.log("Incorrect type");
  }
}

printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);

//Task 2
function calculateSumOfArray() {
  const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
  let sum = 0;
  initialArray.forEach((value) => {
    if (typeof value === "number") {
      sum += value;
    }
  });
  console.log(sum);
}

calculateSumOfArray();

//Task 3
function printSeasonByMonth(month) {
  const seasons = {
    winter: ["DECEMBER", "JANUARY", "FEBRUARY"],
    spring: ["MARCH", "APRIL", "MAY"],
    summer: ["JUNE", "JULY", "AUGUST"],
    autumn: ["SEPTEMBER", "OCTOBER", "NOVEMBER"],
  };

  if (seasons.winter.includes(month)) {
    console.log("winter");
    return;
  }
  if (seasons.spring.includes(month)) {
    console.log("spring");
    return;
  }
  if (seasons.summer.includes(month)) {
    console.log("summer");
    return;
  }
  if (seasons.autumn.includes(month)) {
    console.log("autumn");
    return;
  }
  console.log("incorrect month");
  return;
}

printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");
printSeasonByMonth("MAJ");

//Task 4
function calculateWordsInString(string) {
  const words = string.split(" ");
  console.log(`${words.length} слів`);
}
calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple space");
calculateWordsInString("Some? string, with a triple space");
