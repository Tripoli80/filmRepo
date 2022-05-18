// // //     const arr = [3, 5, 8, 16, 20, 23, 50];
// // //     const result = [];

// // //     // Пишем решение вот тут
// // //     for (i=0; i<arr.length; i++){
// // //         result[i]=arr[i];
// // //     }

// // // console.log(arr)
// // // console.log(result)
// //     for (let i = 0; i < arr.length; i++) {
// //         result[i] = arr[i];
// //     }


// //     const data = [5, 10, 'Shopping', 20, 'Homework'];
// //     const result = [];

// //     // Пишем решение вот тут

// // for (i = 0; i < data.length; i++) {
// //     result[i] = data[data.length - 1-i];
// //         // data[i] *= 2;
// // }
// //     // Не трогаем

// // // Пишем решение вот тут


// // // Не трогаем
// // console.log(data)
// // console.log(result)

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j <= i+lines; j++) {
//         if (j+i >= lines)
//             result += '*';
//         else
//             result += " ";
//     }
//     result += '\n';
// }
// console.log(result)


// // for (let i = 0; i <= lines; i++) {
// //     for (let j = 0; j < lines - i; j++) {
// //         result += " ";
// //     }
// //     for (let j = 0; j < 2 * i + 1; j++) {
// //         result += "*";
// //     }
// //     result += "\n";
// // }
// const a = ["Mango"];
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a.slice();
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// a.push("Poly");

// console.log(a); // ["Mango", "Poly"]

// // b также изменилось, потому что b, как и a,
// // просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]

// // Результат повторяется
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter");
// console.log(myChildren);
// console.log(myChildren.length)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(1,0, "Lemon".toUpperCase(), "Kiwi".toUpperCase());
// console.log(fruits)


// let someStr = "hello my deare"
// console.log(someStr.indexOf("are"), someStr.length)
