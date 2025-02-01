`use strict`;
//Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.

//Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
//Усі символи slug повинні бути в нижньому регістрі.
//Усі слова slug повинні бути розділені тире.
//Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

//Write a function slugify(title) that takes the title of the article, the title parameter, and returns a slug created from this string.
//The value of the title parameter will be strings whose words are separated only by spaces.
//All slug characters must be in lowercase.
//All slug words must be separated by dashes.
//Take the code below and insert it after the declaration of your function to verify that it works correctly. The results of its operation will be printed to the console.
console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
// Leave this code for review by your mentor.
