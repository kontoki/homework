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

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const firstQuestionMovie = prompt("Один из последних просмотренных фильмов?");
const secondQuestionMovie = prompt("На сколько оцените его?");
const thirdQuestionMovie = prompt("Один из последних просмотренных фильмов?");
const fourthQuestionMovie = prompt("На сколько оцените его?");

personalMovieDB.movies[firstQuestionMovie] = secondQuestionMovie;
personalMovieDB.movies[thirdQuestionMovie] = fourthQuestionMovie;

console.log(personalMovieDB);
