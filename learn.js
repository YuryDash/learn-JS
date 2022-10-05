// // (function declaration) обьявление функции
// function showMessage() {
//     console.log('Message');
// }
// showMessage();


// function calcSum(numOne, numTwo) {
//     console.log(`Переменная: ${numOne}`);
//     console.log(`Переменная: ${numTwo}`);
    
//     let numSum = numOne + numTwo;
//     console.log(`Сумма переменных: ${numSum}`);
// }
// calcSum(3, 7);



// function calcSum(numOne, numTwo, more, less,){
//     let numSum = numOne + numTwo;

//     if(numSum > 3){
//         more();
//     } else {
//         less();
//     }
// }

// function showMoreMessage() {
//     console.log('Больше чем 3');
// }

// function showLessMessage() {
//     console.log('Меньше чем 3');
// }
// calcSum(1, 2, showMoreMessage, showLessMessage);


// function calcSum(numOne, numTwo) {
//     let numSum = numOne + numTwo;
//     return numSum;
// }
// const funcRes = calcSum(10, 2);
// console.log(`Сумма: ${funcRes}`);


//==========ПОВТОРЯТЬ============================
// function calcSum(numOne, numTwo) {
//     let result = 1;
//     for(let i = 0; i < numTwo; i++) {
//         console.log(result);
//         result *= numOne;
//     }
//     return result;
// }
// console.log(calcSum(2, 3));


// function calcSum(numOne, numTwo){
//     console.log('===========================');
//     console.log(numTwo);
//     console.log(numOne);
//     console.log('===========================');
//     if(numTwo === 1) {
//         return numOne;
//     } else {
//         return numOne * calcSum(numOne, numTwo -1);

//     }
// }
// console.log(calcSum(2, 4));

//==================ПОВТОРЯТЬ==============



// let userInfo = {
//     name: 'vasia',
// }
// console.log(userInfo);

// userInfo.age = 30;
// console.log(userInfo);

// userInfo['likes JS'] = true;
// console.log(userInfo);

// userInfo.address = {
//     city: 'Minsk',
//     street: 'Shevchenko',
// }
// console.log(userInfo);
// console.log(userInfo.address);





// const myCity = {
//     city: 'Minsk',
//     info:{
//         isPopular: false,
//         country: 'belarus',
//     }
// }
// console.log(myCity.info);
// myCity.info.capital = true;
// console.log(myCity.info);
// delete myCity.info.country;
// console.log(myCity.info);


// использование переменных в обьектах
// const name = 'Yury'
// const postQty = 50;
// const userProfile = {
//     name: name,
//     postQty: postQty,
//     hasSignedAgreement: false,
// }
// console.log(userProfile);

// const name = 'Yury'
// const postQty = 50;
// const userProfile = {
//     name,
//     postQty,
//     hasSignedAgreement: false,
// }
// console.log(userProfile);


// const myCity = {
//     city: 'Minskk',
//     cityGreeting: function (name) {
//         console.log(`Greetings ${name}`);
//     }
// }
// myCity.cityGreeting(', you!')//вызов метода объекта.




//======JSON JavaScript Object Notation======
// {
//     "userID": 1,
//     "id": 1,
//     "title": "Test title",
//     "status": {
//         "completed": false
//     },
// }




// let a
// let b

// function myFn() {
//     let b;
//     a = true;
//     b = 10;
//     console.log(b);
// }

// myFn()
// console.log(a);
// console.log(b);


// let test = {

// }
// console.log(!!test);

// const button = {
//     width: 200,
//     tect: 'Buy',
// }
// const redButton = {
//     ...button,
//     color: 'red', 
// }
// console.table(redButton);

// fnWithError = () => {
//     throw new Error('Some error')
// }
// try{
// fnWithError()
// } catch (error) {
// console.error(error);
// console.log(error.message);
// }
// console.log('continue...');

//================ Деструктуризация =================
// const objOne = {
//     name: 'Yone',
//     work: 'assasin',
//     lastName: 'UNFORGOTTEN',
// }
// const {name, work, lastName} = objOne
// console.log(name);
// console.log(work);
// console.log(lastName);
// console.log(objOne);

// const fruits = ['Apple', 'Banana', 'Kiwi', 'Melon'];
// const [fruitOne, fruitTwo,fruitThree] = fruits;
// console.log(fruitThree);
// console.log(fruitOne);
// console.log(fruitTwo);
// console.log(fruits);

// const objOne = {
//     name: 'Yone',
//     work: 'assasin',
//     lastName: 'UNFORGOTTEN',

// }

// // if - else
// const sumPositiveNumbers = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//        return console.log('One of the arguments is not a number');
//     } else if (a <= 0 || b <= 0) {
//        return console.log('Numbers are not positive!!');
//     } {

//         return console.log(a + b);
//     }
// }
// sumPositiveNumbers(5 , 5)

// const month = 2

// switch (month) {
//     case 12:
//         console.log('ДЕКАБРЬ')
//         break;
//     case 1:
//         console.log('ЯНВАРЬ');
//         break;
//     case 2:
//         console.log('ФЕВРАЛЬ');
//         break;
//     default:
//         console.log('ЭТО НЕ ЗИМНИЙ МЕСЯЦ');

//         break;
// }

// ============== ТЕРНАРНЫЙ ОПЕРАТОР ================
// условие ? выражение 1 : выражение 2;

// const value = 11;

// value 
//     ? console.log('условие истино')
//     : console.log('условие ложно');


// const value1 = 11
// const value2 = 25

// value1 && value2
//     ? myFunction1(value1, value2)
//     : myFunction2();


// let value = 11
// (value >= 0 
//     ? value 
//     : -value);

// value = -5
// const res = value >= 0
//     ? value
//     : -value;

// console.log(res);

// ====================УИКЛЫ==============


// const myArray = [true, 'abc', 10];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);

// const myObject = {
//     a: 10,
//     b: 11,
//     c: 12,
// }
// console.log(myObject.a);
// console.log(myObject.b);
// console.log(myObject.c);


// for(let i = 0; i <= 5; i++){
//     console.log(i)
// }
// console.log('                  ');

// myArray.forEach((Element, index) => {
//     console.log(Element, index)
// })


// //===========================
// let i = 1
// while (i <= 3) {
//     console.log(i)
//     i++    
// }
// //===========================
// console.log(' ')
// //===========================
// for(let i = 1; i <= 3; i++){
//     console.log(i)
// }
// //============================


// const myObject = {
//     a: 10,
//     b: 11,
//     c: 12,
// }
// for (const key in myObject){
//     console.log(myObject[key],key);
// }


//hello again

//========== GAME guessing number==============
// let randomNumber = Math.floor(Math.random() * 100) + 1;

// let guesses = document.querySelector('.guesses');
// let lastResult = document.querySelector('.lastResult');
// let lowOrHi = document.querySelector('.lowOrHi');

// let guessSubmit = document.querySelector('.guessSubmit');
// let guessField = document.querySelector('.guessField');

// let guessCount = 1;
// let resetButton;

// function checkGuess() {
//     let userGuess = Number(guessField.value);
//     if (guessCount === 1) {
//       guesses.textContent = 'Previous guesses: ';
//     }
//     guesses.textContent += userGuess + ' ';
  
//     if (userGuess === randomNumber) {
//       lastResult.textContent = 'Congratulations! You got it right!';
//       lastResult.style.backgroundColor = 'green';
//       lowOrHi.textContent = '';
//       setGameOver();
//     } else if (guessCount === 10) {
//       lastResult.textContent = '!!!GAME OVER!!!';
//       setGameOver();
//     } else {
//       lastResult.textContent = 'Wrong!';
//       lastResult.style.backgroundColor = 'red';
//       if(userGuess < randomNumber) {
//         lowOrHi.textContent = 'Last guess was too low!';
//       } else if(userGuess > randomNumber) {
//         lowOrHi.textContent = 'Last guess was too high!';
//       }
//     }
  
//     guessCount++;
//     guessField.value = '';
//     guessField.focus();
//   }

//   guessSubmit.addEventListener('click', checkGuess);

//   function setGameOver() {
//     guessField.disabled = true;
//     guessSubmit.disabled = true;
//     resetButton = document.createElement('button');
//     resetButton.textContent = 'Start new game';
//     document.body.appendChild(resetButton);
//     resetButton.addEventListener('click', resetGame);
//   }


//   function resetGame() {
//     guessCount = 1;
  
//     var resetParas = document.querySelectorAll('.resultParas p');
//     for (let i = 0 ; i < resetParas.length ; i++) {
//       resetParas[i].textContent = '';
//     }
  
//     resetButton.parentNode.removeChild(resetButton);
  
//     guessField.disabled = false;
//     guessSubmit.disabled = false;
//     guessField.value = '';
//     guessField.focus();
  
//     lastResult.style.backgroundColor = 'white';
  
//     randomNumber = Math.floor(Math.random() * 100) + 1;
//   }

//========== GAME guessing number==============




// let q = 0;
// console.log(q ?? 'lol');



// let num = 0;
// while (num <= 5) {
//     console.log(num);
//     num++;
// }


// let num = 5;
// while(num) console.log(num--);


// let start = 10;
// while(start >= 0) {
// console.log(start);
// start--;
// }

//=========FOR================

// for(let num = 0; num <= 10; num++){
//     console.log(num);
// }


// let num = 0;
// for(; num <= 5; num++) {
//     console.log(num);
// }


// let num = 5
// for(; num >= 0; num--){
//     console.log(num);
//     if (num == 2) break;
// }
// alert(`работа окончена , num = ${num}`);

// let num = 0;
// for (; num < 5; num++) {
//     if (num == 3  || num == 2) continue;

//     console.log(num);
// }


// firstFor: for (let num = 0; num < 2; num++) {
//     for(let size = 0; size <= 5; size++) {
//         if (size == 4) {
//             break firstFor;
//         }
//         console.log(size);
//     }

// }

// let num = 1;
// while(num) {
//     console.log(num);
//     num++;

//     if (num == 50)break;
// }


// for (let five = 0; five <= 5; five++){
//     console.log(five);
// }
//=========FOR================




//==================function==================

// function summ (numOne, numTwo) {
//     console.log(`Переменная один: ${numOne}`);
//     console.log(`Переменная два: ${numTwo}`);

//     let culcSum = numOne + numTwo;

//     console.log(`Сумма переменных = ${culcSum}`);
// }
// summ(10,11)



// function culcSum(numOne, numTwo, more, less){
//     let numSum = numOne + numTwo;

//     if (numSum > 3) {
//         more();
//     } else {
//         less();
//     }
// }

// function showMoreMessage() {
//     console.log(`Число  больше 3`);
// }
// function showLessMessage() {
//     console.log(`Число  меньше 3`);
// }
// culcSum(1, 1, showMoreMessage, showLessMessage)


// function calcSumm(numOne, numTwo) {
//     let result = 1;
//     for(let i = 0; i < numTwo; i++){
//         result *= numOne;
//     }
//     return result;
// }
// console.log(calcSumm(3,3))
// //num1 умножается на num2 раз


// function calcSum(num1, num2){
//     if (num2 === 1) {
//         return num1;
//     } else {
//         return num1 * calcSum(num1, num2 - 1);
//     }
// }
// console.log(calcSum(3,3))


//==================function==================

// Iterate Through an Array with a For Loop(CodeCamp)

// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for(let i = 0; i < myArr.length; i++){
//   total += myArr[i];
// }
// console.log(myArr.length);


// // Nesting For Loops(CodeCamp)
// function multiplyAll(arr) {
//     let product = 1;
//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//       product *= arr[i][j];

//       console.log(arr[i][j])

//     }
//     // console.log(arr[i])

//   }
//     return product;
//   }
//   multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// function UserInfo(name){
//     this.name = name;
//     this.age = 10;
// }


// console.log(new UserInfo('Vasia'));
// console.log(new UserInfo('Petia'));


// // Iterate with JavaScript Do...while Loops
// const myArray = [];
// let i = 10;

//  do{
//   myArray.push(i);
//   i++;
// } while (i < 10);


// //profile loockup

// const contact = [

//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
  
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
  
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
  
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
  
//   ];
  
//   function lookUpProfile(name, prop) {
    
//     for (let i = 0; i < contact.length; i++) {
//       if (contact[i].firstName === name) {
//         return contact[i][prop] || 'No such property';
//             } 
//     }
//     return 'No such contact';
//   }
  
//   lookUpProfile("Akira", "likes");


// //Generate Random Fractions with JavaScript
// function randomFraction() {

//     let func = Math.random()
    
//       return func;
    
//     }

// console.log(randomFraction());
// console.log(randomFraction());

// console.log(randomFraction());
// console.log(randomFraction());
// console.log(randomFraction());



// // Generate Random Whole Numbers with JavaScript
// function randomWholeNum() {
//     let p;
//     p = Math.floor(Math.random() * 10);
//       return p;
//     }

// //Generate Random Whole Numbers within a Range
// function randomRange(myMin, myMax) {

  

//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  
//   }









