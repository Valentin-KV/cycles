"use strict";

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }
// пока наше условие (прописывается в скобках) не выполнено - выполнять действия в {}

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);
// выполнять (do) действие в {} пока (while) условие не выполнится

// for (let i = 1; i < 8; i++) {
//     console.log(i);
//     num++;
// }
// создаем i (итэрация) и присваиваем ему начальное значение, обычно 1. выполнять цикл пока не выполнится условия для i. Изменяем значение i каждую итэрацию

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;  прерывает цикл при достижении условия
//         continue; // продолжает цикл при достижении условия, но исклучает итэрацию условия из вывода
//     }
//     console.log(i);
// }

// Доп урок по циклам - вложенные циклы

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
    
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }


//     result += '\n';
// }

// console.log(result);

// Использование меток во вложенных циклах

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// function firstTask() {
    
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }        
// }

// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }

// // выводит нечетные числа пропуская четные
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// // то же самое только с использованием while - выводит нечетные числа пропуская четные
// let i = 2;
// while (i <= 16) {
//     if (i % 2 !== 0) {
//     console.log(i);
//     }
//     i++;
// }

// // заполняем массив числами от 5 до 10 включительно
// const arrayOfNumbers = [];

// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers.push(i);

// }
// console.log(arrayOfNumbers);

// Продвинутые задания на циклы
// Задание №1
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];


// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);

// Задание №2
// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'string') {
//         data[i] = data[i] + " - done";
// } else {
//     data[i] = data[i] * 2;    
// }
// }
// console.log(data);

// Задание №3
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = data.length - 1; i >= 0; i--) {
//     result.push(data[i]);
    
// }
// console.log(result);


// Нарисовать фигуру с помощью *

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

    // const lines = 5;
    // let result = '';
    
    // for (let i = 0; i <= lines; i++) {
    //     for (let j = 0; j < lines - i; j++) {
    //         result += " ";
    //     }
    //     for (let j = 0; j < 2 * i + 1; j++) {
    //         result += "*";
    //     }
    //     result += "\n";
    // }
    
    // console.log(result)

// А это решение выдал chatGPT

// function drawFigure(height) {
//     for (let i = 0; i < height; i++) {
//     let spaces = ' '.repeat(height - i - 1);
//     let stars = '*'.repeat(2 * i + 1);
//     console.log(spaces + stars);
//     }
//     }
    
//     drawFigure(6);
