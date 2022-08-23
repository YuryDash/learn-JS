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





































































