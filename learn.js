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


//===========================
let i = 1
while (i <= 3) {
    console.log(i)
    i++    
}
//===========================
console.log(' ')
//===========================
for(let i = 1; i <= 3; i++){
    console.log(i)
}
//============================




















