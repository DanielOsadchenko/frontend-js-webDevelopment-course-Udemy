# frontend-js-webDevelopment-course-Udemy

Here is my tasks for Udemy course

## Lecture 10

Practice: Fulfil missing operators in equations and expressions
Завдання 1
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
Завдання 2
Дано: масив [3, 2, "2", null, 1.5, 9.5, undefined];

Результат: Вивести у консоль суму чисел у масиві.

function calculateSumOfArray() {
const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
// Write code here
}

calculateSumOfArray();
Завдання 3
Дано: Функція яка приймає назва місяця у форматі = "DECEMBER" | "FEBRUARY" | "JULY" і тд.

Результат: Вивести у консоль назву пори року якій відповідає даний місяць. “summer” | “autumn” | “winter” | “spring”.

function printSeasonByMonth(month) {
// Write code here
}

printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");

Завдання 4
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
