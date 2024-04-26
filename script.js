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

function firstTask() {
    
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }        
}

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// выводит нечетные числа пропуская четные
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
// то же самое только с использованием while - выводит нечетные числа пропуская четные
let i = 2;
while (i <= 16) {
    if (i % 2 !== 0) {
    console.log(i);
    }
    i++;
}

// заполняем массив числами от 5 до 10 включительно
const arrayOfNumbers = [];

for (let i = 5; i <= 10; i++) {
    arrayOfNumbers.push(i);

}
console.log(arrayOfNumbers);