`use strict`;
//Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.

//Усередині функції:

//Створи порожній масив, у який будеш додавати підходящі числа.
//Використай цикл для ітерації кожного елемента масиву numbers.
//Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
//Поверни свій новий масив з підходящими числами як результат.

//Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
//Write a function filterArray(numbers, value) that takes an array of numbers and a value as parameters. The function should return a new array of only those numbers in the numbers array that are greater than value.
//Inside the function:
//Create an empty array to which you will add the matching numbers.
//Use a loop to iterate through each element of the numbers array.
//Use an if statement inside the loop to test each element and add it to your array.
//Return your new array with the matching numbers as the result.
//Take the code below and paste it after the declaration of your function to verify that it works correctly. The results of its operation will be printed to the console.
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
//Leave this code for review by your mentor.
