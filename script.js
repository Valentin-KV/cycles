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

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}