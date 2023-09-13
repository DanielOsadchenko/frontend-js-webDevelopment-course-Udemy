# frontend-js-webDevelopment-course-Udemy

Here is my tasks for Udemy course

## Lecture 10

Practice: Fulfil missing operators in equations and expressions

### Завдання 1

Дано: Функція яка приймає значення яке може бути будь-яким типом даних = "302", null, 128, 60

Результат: Вивести у консоль числа які є степенем двійки та не більші заданого значення або вивести помилку про коректний тип якщо значення не є числом

Приклад:

60 - 1, 2, 4, 8, 16, 32

64 - 1, 2, 4, 8, 16, 32, 64

“32” - "incorrect type"

function printPowsOf2(number) {
// Write code here
}

printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);

### Завдання 2

Дано: масив [3, 2, "2", null, 1.5, 9.5, undefined];

Результат: Вивести у консоль суму чисел у масиві.

function calculateSumOfArray() {
const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
// Write code here
}

calculateSumOfArray();

### Завдання 3

Дано: Функція яка приймає назва місяця у форматі = "DECEMBER" | "FEBRUARY" | "JULY" і тд.

Результат: Вивести у консоль назву пори року якій відповідає даний місяць. “summer” | “autumn” | “winter” | “spring”.

function printSeasonByMonth(month) {
// Write code here
}

printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");

### Завдання 4

Дано: Функція яка приймає стрічку яка містить мінімум 1 слово та пробіли. Перший та останній символ не пробіли. Слова можуть бути розділені не лише одним пробілом.

Результат: Вивести у консоль кількість слів у стрічці.

Приклад:
"Easy string for count" - 4 слова
"Some string with a triple space" - 6 слів

function calculateWordsInString(string) {
// Write code here
}
calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple space");
calculateWordsInString("Some? string, with a triple space");

## Lecture 14

Practice with getting the information from objects, processing it, store, etc.

### Завдання 1

Дано: функція яка приймає масив чисел або стрічок.
Результат: вивести у консоль масив унікальних значень початкового масиву
Приклад: [2, 3, 1, 3, 3, 7] => [2,3,1,7]

function unicFn(initialArray) {
// Write code here
}

### Завдання 2

Дано: функція яка приймає масив чисел
Результат: вивести у консоль "YES" якщо усі числа у масив парні та "NO" в іншому випадку
Приклад:
[1, 2, 3, 9] => “NO”
[2, 4, 6] => “YES”

function isEvenArray(initialArray) {
// Write code here
}

### Завдання 3

Дано: функція яка приймає масив елементів будь-яких типів
Результат: вивести у консоль масив який містить лише стрічки початкового масиву
Приклад:
[2, “string”, 3, , , ”test”] => [“string”, “test”]

function filterArray(initialArray) {
// Write code here
}

### Завдання 4

Дано: Функція приймає Об’єкт типу {[name]: {age: number, city: string}}
Результат: Вивести у консоль масив із іменами людей які із міста "London" та старше 18 років
Приклад:
{Max: {age: 23, city: “London”}, Mike: {age: 20: city: “NY”}} => [“Max”]

function findUser(initialObject) {
// Write code here
}

### Завдання 5

Дано: Функція приймає три параметри: масив обєктів [{}, {}], назву поля обєкту (string), значення (string)
Результат: Вивести у консоль новий масив з якого видалені усі обєкти в яких keyName буде дорівнювати value
Приклад:
removeObj([{age: 1}, {age: 2}, {age: 2}, {year: 2}], "age", 2) => [ { age: 1 }, { year: 2 } ]

function removeObj(arrayOfObj, keyName, value) {
// Write code here
}

const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
removeObj(arr, "age", 2);
removeObj(arr, "year", 2);

## Lecture 18

Practice: Create a very helpful function, use it couple of times

### Завдання 1

Global Scope: створити змінну в глобальній області видимості, створити функцію і в тілі функції вивести цю змінну в консоль
Function Scope: створити функцію, оголосити зміну всередині функції, тоді спробувати вивести цю змінну в консоль всередині функції, та за межами функції
Block Scope: Створити функцію, в функції написати блок {} всередині якого оголосити змінну та вивести її в консоль, тоді вивести в консоль цю змінну за межами блоку, та подивитись на результат

// write below code for global scope

// write below code for function scope

// write below code for block scope

### Завдання 2

В функції showCarInfo вивести в консоль name та model об'єкту car використовуючи контекст через this, викликати функцію showCarInfo використовуючи bind.

const car = {
name : "Tesla",
model : "X",
};

function showCarInfo() {
// write code here
}

### Завдання 3

Дано: код в якому необхідно знайти помилку і виправити її
Результат: вивести в консоль “meow”

const cat = {
sound: 'meow',
greet: function() {
setTimeout(function() {
console.log(this.sound)
}, // write fix in this line of code 0)
}
};
cat.greet(); // should produce "meow"

### Завдання 4

Дано: об'єкт у якому необхідно переписати існуючу функція на стрілочну, щоб він почав виконуватись коректно
Результат: вивести у консоль “bark”

const dog = {
sound: 'bark',
greet: function() {
setTimeout(function () { // fix code in this line
console.log(this.sound)
},0)
}
}

dog.greet();

### Завдання 5

Дано: написати Анонімну функцію та присвоїти її значення змінній convert, функція має приймати число, яке є кількістю байтів та повертати стрічку із переведеними байтами в мб, з двома знаками після коми в форматі "100.00 Mb" та викликати цю функцію використовуючи call
Результат: функція приймає число (байти) та перетворює у стрічку у форматі Мб наприклад:
10000 -> 0.01 Mb

let convert; // write your anonymous function here

### Завдання 6

Дано: написати функцію logPersonNameAndInterests яка прийматиме довільну кількість аргументів стрічок та виводитиме в консоль повне ім'я Person використовуючи виклик getFullName з контекстом Person, а також перелік усіх його інтересів які приходять аргументами цієї функції
Результат: виклик logPersonNameAndInterests з контекстом Person та переліком інтересів ['sushi', 'hiking'] -> в консолі 'John Doe loves: sushi, hiking'

const Person = {
firstName: 'John',
lastName: 'Doe',
getFullName: function () {
const fullName = this.firstName + ' ' + this.lastName;
return fullName;
}
};

const testArgs = ['sushi', 'hiking']

let logPersonNameAndInterests; // your code here

## Lecture 21

Practice with creating HOF (higher order function) and composition

## Завдання

Дано: Написати функцію вищого порядку compose яка прийматиме довільну кількість функцій як аргумент і створюватиме з них композицію Написати карі функцію (modifyArray) яка прийматиме спочатку як аргумент функцію (modifyCondition), а далі прийматиме як аргумент масив стрічок (data), карі функція повинна повертати модифікований масив згідно умови (modifyCondition) яка прийшла на початку карі функції Написати композиції allToLower та capitalizeAllFirst використовуючи власний compose та modifyArray які прийматимуть масив стрічок та повертатимуть наступний результат:
const testArray = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

1. allToLower - приймає testArray -> перетворює стрічки так що усі символи приводяться до нижнього регістру 'Result: custom - web - and - mobile - platforms length: 39'
2. capitalizeAllFirst - приймає testArray -> перетворює стрічки так що лише перший символ у верхньому регістрі, інші у нижньому, об'єднує їх в одну стрічку з символом'-' -> виводить в консоль 'Result: Custom-Web-And-Mobile-Platforms length: 31'

Приклад

capitalizeAllFirst(arr) // в консолі 'Result: Custom-Web-And-Mobile-Platforms length: 31'
allToLower(arr) // в консолі 'Result: custom - web - and - mobile - platforms length: 39'
Підготовлений код

const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

let compose; // your compose function

let modifyArray; // your modify array function

let capitalizeAllFirst; // use compose + modifyArray here

let allToLower; // use compose + modifyArray here

// capitalizeAllFirst(arr) // в консолі 'Result: Custom-Web-And-Mobile-Platforms length: 31'
// allToLower(arr) // в консолі 'Result: custom - web - and - mobile - platforms length: 39'

## Lecture 24

Practice: Create some classes, inherit them from some parent class...

### Завдання 1

1. Створити ф-ію конструктор Calculator та до її прототипу добавити два методи sum(a,b) та subtract(a,b)
2. Створити ф-ію конструктор AdvancedCalculator (наслідує методи від Calculator) та до її прототипу добавити два методи multiply(a,b) та divide(a,b)

### Завдання 2

Дано: Функція для генерації ID

1. Створити клас TodoItem із полями(властивостями): id(генерується у конструкторі за допомогою функції), name, checked(за замовчуванням false). Для поля checked написати гетер та сетер (добавити валідацію: поле може приймати лише булеве значення true або false)
2. Створити клас TodoList із полями: id(генерується у конструкторі за допомогою функції), name, items(за замовчуванням пустий масив).
   Добавити наступні методи:
   addItem - метод який добавляє елементи до масиву (потрібно зробити валідацію на тип TodoItem)
   removeItemById - метод який видаляє елемент з масиву по id
   getItemById - метод який повертає елемент TodoItem з масиву по id
3. Створити екземпляр класу TodoList;
4. Створити 4 екземпляри класу TodoItem, добавити їх у TodoList та вивести у консоль екземпляр класу TodoList.
5. Поміняти значення checked у одного екземпляру TodoItem та вивести TodoList у консоль( у масиві items це поле має бути оновлене)
6. Видалити 2 екземпляри TodoItem із TodoList та вивести у консоль TodoList(у масиві items має залишитись лише 2 екземпляри TodoItem)

function generateId() {
return "\_" + Math.random().toString(36).substr(2, 9);
}
