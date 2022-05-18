// # Модуль 1. Занятя 1.

// ## Example 1 - Базові математичні операції

// Виведи на екран загальну кількість яблук і винограду. Різницю я та винограду
// let namer = "serhii";
// console.log(namer);
// ```js
// const apples = 47;
// const grapes = 135;
// const total = ;
// console.log(total)
// const diff = ;
// console.log(diff)
// ```

// ## Example 3 - Пріоритет операторів

// Розбери пріоритет операторів
// `result`.

// ```js
// const result = 108 + 223 - 2 * 5;
// console.log(result);
// ```
// const apple = 6.23;
// const banan = 15;
// // const all = 
// console.log(Math.ceil(apple));
// console.log(Math.floor(apple));

// console.log(Math.round(apple));=5
// const bots1 = "as";
// let result;
// switch (bots1){
//     case 1:
//         result = 5;
//         break;
//     case 8:
//         result = 62;
//         break;
//     case "as":
//         result = "leter"
//         break;
//     case 5:
//         result = 5;
//         break;
    
//     default:
//         result = 'not have result';
//         break;
    
//         }
// console.log(result);
// console.log(5&&1);



    

// ## Example 4 - Клас Math

// Напиши код який виводить в консоль округлення вверх / вниз.Використовуй методи`Math.floor()`,
// `Math.ceil()` і`Math.round()`.

// ```js
// const value = 27.5;
// ```

// ## Example 5 - Шаблонні рядки

// Склади фразу`A has B bots in stock`, де A, B - це змінні

// ```js
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = ``;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 6 - Оператори порівняння і приведення типів

// Яким буде результат виконання коду?

// ```js
// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);
// ```

// ## Example 7 - Опертор % та методы рядків

// Напиши код який переводить значення`totalMinutes`(кількість хвилин) в формат
//  `HH:MM`

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// ```js
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// ```
// ## Example 8 - Логічні оператори

// Яким буде результат виразу

// ```js
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
// ```



let numberOfFilms = prompt("Сколько0 фильмов ві уже посмотрели?");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
    

};
let newFilms = prompt("Один из последних фильмов ві уже посмотрели?");
let newFilmGrade = prompt(`Ваша оценка фильма "${newFilms}"`);
personalMovieDB.movies [newFilms]= newFilmGrade ;
console.log(personalMovieDB.movies);

// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    
    for (i = 5; i < 11; i++){
        console.log(i);
        
    }
}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (i = 20; i >= 10; i--)
        if (i === 13) break;
    console.log(i);
    
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
        for (i = 2; i < 11; i++){
        console.log(i);
        
    }
    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

while (i <= 16) {
    if (i % 2 === 0) {
          i++;
        continue;
    } else {
        console.log(i);
      }
    i++;
    
}

function fourthTask() {
    // Пишем решение вот тут
    
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    
    
    // Не трогаем
    return arrayOfNumbers;
}