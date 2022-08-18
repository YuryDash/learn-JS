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



let userInfo = {
    name: 'vasia',
}
console.log(userInfo);

userInfo.age = 30;
console.log(userInfo);

userInfo['likes JS'] = true;
console.log(userInfo);

userInfo.address = {
    city: 'Minsk',
    street: 'Shevchenko',
}
console.log(userInfo);
console.log(userInfo.address);


  




































































