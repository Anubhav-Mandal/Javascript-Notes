// 1 . Ways to print in javascript
// console.log("hello world");
// alert("me");
// document.write("this is a document")

// 2. Javascript console API
//   console.log("hello world,4+6,another log");
//   console.warn("this is a warning");
//   console.error("This is an error");

// 3. Javascript variables
// -> Container to store data values
//  var num1 = 34;
//  var num2 = 45;
//  console.log(num1 + num2);

// 4. Datatypes in javascript

// Numbers
// var num = 34;
// var num2 = 45.56;

// String
// var str1 = "This is a string";
// var str2 = "This is also a string";

// object
// var marks ={
//     rohan : 34,
//     subham : 45,
//     harry : 3
// }
// console.log(marks);

// booleans
// var a = true;
// var b = false;
// console.log(a,b);

// Undefined
// The by default value in javascript is undefined is you have not defined the variable or assigned anything to a variable
// var und = undefined;
// console.log(und);

// NULL
// var n = null;
// console.log(n);

/*
At a very high level, there are two types in Javascript
 1 . Primitive data types : undefined, null, number, string, boolean, symbol
2. Reference data types : array and objects
*/

// var arr = [1,2,"string",4,5];
// console.log(arr);

// 5. Operators
// Arithematic operators
// var a1 = 34;
// var b1 = 54;

// console.log("The value of a + b is ",a1+b1);
// console.log("The value of a - b is ",a1-b1);
// console.log("The value of a * b is ",a1*b1);
// console.log("The value of a / b is ",a1/b1);

// Assignment Opertors

// '=' operator - to assign value to a variable
// var c = b1;
// c+=2; // c = c+2
// c-=2; // c = c-2
// c*=2; // c = c*2
// console.log(c);

//Comparison operators
// var x = 34;
// var y = 45;
// '==' operator - to check whether two variables are equal or not
// console.log(x==y);

// '>=' operator - to check whether one variable is greater of other
// console.log(x>=y);
// console.log(x<=y);

// logical operators

// Logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// Logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// Logical NOT
//  console.log(!false);
//  console.log(!true);

// Functions in javascript
// DRY = Do not repeat yourself
// function avg(a,b){
//     return (a+b)/2;
// }

// c1 = avg(2,4);
// c2 = avg(3,6);
// console.log(c1, c2);

// Conditional in Javascript

// var age = 34;
// if(age>8){
//     console.log("you are not a kid");
// }
// else{
//     console.log("you are a kid");
// }

// loops
// var arr2 = [1, 2, 3, 4, 5];
// console.log(arr2);

// For loop
// for (var i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }

// let j = 0;
// const a = 0;

// While loop 
// let j = 0;
// while(j<arr2.length){
//     console.log(arr2[j]);
//     j++;
// }

// do-While loop 
// let k = 0;
// do{
//   console.log(arr2[k]);
//   k++;
// }while(j<arr2.length)

// let arr2= [1,2,3,4,5];

//  break statement 
// for(let i=0;i<arr2.length;i++){
//     if(i==2){
//         break;
//     }
//     else{
//        console.log(arr2[i]);
//     }
// }
//

// let arr3 = [1,2,3,4,5];
//  continue statement 
//  for(let s=0;s<arr3.length;s++){
//     if(s==2){
//         continue;
//     }
//     else{
//         console.log(arr3[s]);
//     }

//  }


// array methods
// let myArr=[2,"fan",null, true];
// console.log(myArr.length);
//  // return the length of the array 
// myArr.pop(); 
// // pop last element from the array 
// console.log(myArr);
// // return the elements in the array 
// console.log(myArr.length);
// // return the length of the array after poping an element out of the array 
// myArr.push("Harry");
// Add an element to the list from the last
// console.log(myArr);
// return all the elements
//myArr.shift();
// delete the element from zeroth index 
// console.log(myArr);
// return the  all the elements after shift option 
// myArr.unshift("harry");
// add element from the beginning 
// console.log(myArr);
// print all the elements after unshift option 

// const newlen =  myArr.unshift("harry");
// console.log(newlen);
// console.log(myArr);


// string methods in javascript
// let myString = "Anubhav is a good good boy";
// console.log(myString.length); 
// // return the length of the string 
// console.log(myString.indexOf("good"));
// // return the first index of item that is asked for 
// console.log(myString.lastIndexOf("good"));
// // return last index of the item that is asked
// console.log(myString.slice(0,13));
// // used to slice the string from where it is asked to where it is needed'
// console.log(myString.replace("Anubhav "," harry "));

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


// DOM - Document object model 
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementById('container');
console.log(elemClass);
