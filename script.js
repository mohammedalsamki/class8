var a = 10;

let m = false;
console.log(typeof (m))

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var obj = {
    name: 'ahmad',
    age: 20,
    address: 'dhaka',
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

    string: {
        name: 'ziad',
        age: 25,
        address: 'dhaka',
    }
}
console.log(obj);
console.log(obj.string.name);

console.log(arr.length);
// how to declare m,a variable in javascript
// var, let, const
// what is var??

// var is a keyword which is used to declare a variable in javascript


var c = ' Hello World';
// console.log('hellow i am js from contact page')

// what is let ??

// let is a keyword which is used to declare a variable in javascript


let b = 20;

// console.log(b);

// what is const ??

// const is a keyword which is used to declare a variable in javascript

const d = 30;
// console.log(d);

// what is the difference between var, let and const ??

// var and let both are same but the difference is var is a global variable and let is a local variable

// const is a variable which value is not changeable

// what is the data type in js ??

// string, number, boolean, object, undefined, null


// what is the string ??

// string is a data type which is used to store a string value

var test = 'hellow world';
// console.log(test);

// what is the number ??

// number is a data type which is used to store a number value

var test1 = 10;
// console.log(test1);

// what is the boolean ??

// boolean is a data type which is used to store a true or false value

var test2 = false;
// console.log(test2);

// what is the object ??

// object is a data type which is used to store a object value

var test3 = {
    // key: value
    name: 'hellow',
    age: 20,
    address: 'dhaka'
}
// console.log(test3);

// what is operations in js

// + Addition

var num1 = 5;
var num2 = 10;


var total = num1 - num2;
total--;
console.log(total++);

var n = 5;

n = 'mamun';
console.log(n);

// if statement  in js
var number1 = '15';
var number2 = '15';

if (number1 > number2) {
    // code
    console.log('number1 is greater than number2 ')

} else if (number1 === number2) {
    console.log('number2 is equal  number1')

} else if (number1 < number2) {
    console.log('number2 is greater than number1')
}
// deferent between == and ===

// == only check the value

// === check the value and data type

// switch statement in js and deference between if statement

// coffee shop :> 1. coffee 2. tea 3. juice 4. water

var choice = 7;

// if (choice >= 1 && choice <= 4) {
//     if (choice === 1) {
//         console.log('coffee')

//     } else if (choice === 2) {
//         console.log('tea')

//     } else if (choice === 3) {
//         console.log('juice')

//     } else if (choice === 4) {
//         console.log('water')

//     } 
    
// } else {
//     console.log('please select a valid number between 1 to 4')
// }

switch (choice) {
    case 1:
        console.log('coffee')
        break;
    case 2:
        console.log('tea')
        break;
    case 3:
        console.log('juice')
        break;
    case 4:
        console.log('water')
        break;
    default:
        console.log('please select a valid number between 1 to 4')
        break;
}



// deferent between if statement and switch statement

// if statement is used to check a condition

// switch statement is used to check a condition

// if statement can have a limitation  but switch statement can't have a limitation


// for loop in js


for (var i = 0; i <= arr.length; i++){
    console.log(i)
}

// i=0 >> 0<=10 >> True >> console.log(i) >> 0 >> i++ >> i = 0+1 >> i = 1
// i=1 >> 1<=10 >> True >> console.log(i) >> 1 >> i++ >> i = 1+1 >> i = 2
// i=2 >> 2<=10 >> True >> console.log(i) >> 2 >> i++ >> i = 2+1 >> i = 3
// i=3 >> 3<=10 >> True >> console.log(i) >> 3 >> i++ >> i = 3+1 >> i = 4
// i=4 >> 4<=10 >> True >> console.log(i) >> 4 >> i++ >> i = 4+1 >> i = 5
