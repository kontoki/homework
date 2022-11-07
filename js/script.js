"use strict";

// alert("hello")

// const result = confirm("are you here?");
// console.log(result);

// const answer = prompt("вам есть 18?", "18");
// console.log(typeof answer);

// const answers = [];

// answers[0] = prompt("как ваше имя", "");
// answers[1] = prompt("как ваша фамилия", "");
// answers[2] = prompt("как ваше отчество?", "");

// document.write(answers);

// const userName = prompt("сколько вам лет?");

// alert(`вам ${userName} лет`);

// let y = true,
//   x = false;

// console.log(x !== y);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// a = +a;
// b = +b;
// alert(a + b);

// Задание на объекты и массивы

// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const firstQuestionMovie = prompt("Один из последних просмотренных фильмов?");
// const secondQuestionMovie = prompt("На сколько оцените его?");
// const thirdQuestionMovie = prompt("Один из последних просмотренных фильмов?");
// const fourthQuestionMovie = prompt("На сколько оцените его?");

// personalMovieDB.movies[firstQuestionMovie] = secondQuestionMovie;
// personalMovieDB.movies[thirdQuestionMovie] = fourthQuestionMovie;

// console.log(personalMovieDB);

// переменнные
// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log ("я сыт!");
// }
// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0); /* 1 - это true 0 это false => оператор && считал, что там 0 и выдал его */
// console.log(1 && 5); /* оба true то оператор возвращает последнее значение */
// console.log(null && 5); /* null -fale 5 - true => вернуло первое false которое увидел оператор */
// console.log(0 && "dasd");

// if (hamburger === 3 && cola && fries) {
//     console.log ("ВСЕ СЫТЫ!");
// } else {
//     console.log("мы уходем(");
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 0;
// const cola = 0;
// const nuggets = 2;

// if (hamburger ===3 && cola === 2 || fries === 3 && nuggets) {
//     console.log ("ВСЕ СЫТЫ!");
// } else {
//     console.log("мы уходем(");
// }

// let johnReport, alexReport, samReport, mariaReport = "done";

// console.log(johnReport || alexReport || samReport || mariaReport);

/* console.log(!3); возвращает значение обратное аргументу не 0 значит true
 */
/* console.log( NaN || 2 || undefined ); 2
 
console.log( NaN && 2 && undefined ); NaN
 
console.log( 1 && 2 && 3 ); 3
 
console.log( !1 && 2 || !3 ); !1 false  
 
console.log( 25 || null && !3 ); false 25
 
console.log( NaN || null || !3 || undefined || 5);5
 
console.log( NaN || null && !3 && undefined || 5); 5
 
console.log( 5 === 5 && 3 > 1 || 5); 5 true

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
ответ: true(done)

let hamburger; undefined
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}
ответ: done т.к нагетсов может быть хотя бы 1

let hamburger; undefined
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
   else{
    console.log('no!')
   }

ответ: false "no"

 */

// циклы
// while - пока это условие выполняется мы будет делать эти действия
// do - сделай что-то

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//   console.log(i);
//   num++;
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue; - позволяет пропустить шаг который не нужен, но не прерывает циклы
//   }
//   console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);

//     }
// }

// let result = "";
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n'
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`first level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`third level: ${k}`);

//         }
//     }
// }

// const arr = ["2", "5", "3", "9"];
// alert(arr[0] * arr[1]);
// alert(arr[2] * arr[3]);

// let result = arr;
// alert(result);

// let obj = { a: 1, b: 2, c: 3 };
// alert(obj["a"]);

// let obj = { Коля: "1000", Вася: "500", Петя: "200" };

// alert(obj["Коля"]);
// alert(obj["Петя"]);

// let obj = {
//   1: "sunday",
//   2: "Вторник",
//   3: "Среда",
//   4: "Четверг",
//   5: " Пятница",
//   6: "суббота",
//   7: "ВОскресенье",
// };

// console.log(obj["7"]);

// let day = obj["3"];
// console.log(day);

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr[1][0]);

// let obj = { js: ["jQuery", "Angular"], php: "hello", css: "world" };
// console.log(obj.js[0]);

// let a = 3;
// if (a === 1) {
//   console.log("верно");
// } else {
//   console.log("неверно");
// }

// ЦИКЛЫ ЦИКЛ ЦИКЛЫ

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   const firstQuestionMovie = prompt("Один из последних просмотренных фильмов?");
//   const secondQuestionMovie = prompt("На сколько оцените его?");

//   if (
//     firstQuestionMovie != null &&
//     secondQuestionMovie != null &&
//     firstQuestionMovie != "" &&
//     secondQuestionMovie != "" &&
//     firstQuestionMovie.length < 50
//   ) {
//     personalMovieDB.movies[firstQuestionMovie] = secondQuestionMovie;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// let i = 0;
// do {
//   const firstQuestionMovie = prompt("Один из последних просмотренных фильмов?");
//   const secondQuestionMovie = prompt("На сколько оцените его?");
//   i++;
//   if (
//     firstQuestionMovie != null &&
//     secondQuestionMovie != null &&
//     firstQuestionMovie != "" &&
//     secondQuestionMovie != "" &&
//     firstQuestionMovie.length < 50
//   ) {
//     personalMovieDB.movies[firstQuestionMovie] = secondQuestionMovie;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// } while (i < 2);
// console.log(personalMovieDB);

// Функции Функции

// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   // let num = 20; - переменная работает только внутри функции. если ее вызвать за пределами function то она undefined т.е она локальная
//   num = 10; /* - однако работает с глобальной */
// }

// showFirstMessage("hell world");
// console.log(num);

// // function calc(a, b) {
// //   return a + b;
// // }
// // console.log(calc(4, 3));
// // console.log(calc(5, 6));
// // console.log(calc(10, 6));

// function ret(){
//    let num = 50;
//    return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//   console.log("hello");
// };

// logger();

// const calc = (a, b) => a + b;

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//   console.log(curr - amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// ЗАДАние на функции

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const firstQuestionMovie = prompt(
      "Один из последних просмотренных фильмов?"
    );
    const secondQuestionMovie = prompt("На сколько оцените его?");

    if (
      firstQuestionMovie != null &&
      secondQuestionMovie != null &&
      firstQuestionMovie != "" &&
      secondQuestionMovie != "" &&
      firstQuestionMovie.length < 50
    ) {
      personalMovieDB.movies[firstQuestionMovie] = secondQuestionMovie;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYourGenres();
