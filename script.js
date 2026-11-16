// import {totalprice} from "./scripts.js";

// alert("your total is " + totalprice);



// Rules of Variabes 
//1. Variable name can not be a reserved keyword
// const const = "Ali";// wrong variable name because const is a reserved keyword
// let if = "HTML"; //  wrong method
// var var = "Ali"; // wrong method

//2. Variable name can not start with a numb`er
// let 1stname = "Ali"; // wrong method
// let name1 = "Ali"; // correct method

//3. Variable name can not contain a space or hyphen (-)
// let father name = "Ali"; // wrong method
// let father_name = "Ali"; // correct method
// Camel Case Method
// let fatherName = "Ali"; // correct method

//4. Variable name can only contain letters, numbers, underscores, or dollar signs
// let priceIn$ = 1200; // correct method


//5. Variable names are case-sensitive
// Name is not equal to name
// let Names = "Ali"; 
// console.log(Name); 

// console.log(Names); 



// Data Type 

// let name = "Ali"; // String
// let age = 20; // Number
// let isStudent = true; // Boolean
// let car = null; // Null
// let address; // Undefined
// let person = {firstName: "Ali", lastName: "Khan"}; // Object

// Array   =  Collection of multiple values in a single variable


// let Cars = ["BMW","Audi","Toyota","Honda"]; // Array

// console.log(Cars);
// console.log("Car = " + Cars[3]);

// console.log(Cars.length);



// Global Scope
// let username = "ALi";

// // function Scope
// function test() {
//    let b = "testing";
//    console.log(b);
// }

// test();
// console.log(b);




// Closure

// function outer() {
//    let count = 0;

//    return function () {
//        count++;
//        console.log(count);
//    };
// }

// const counter = outer();

// counter();
// counter(); 
// counter(); 
// counter(); 
// counter(); 
// counter(); 
// counter(); 



// This Keyword

// let user = {
//     names: "Ali",
//     age: 20,
//     isStudent: true,
//     greet:function(){
//         alert("Hello Welcome to our website " + this.names);
//     }
// }

// user.greet();

// // Arrow Function

// let sum = (a,b)=>a+b;

// console.log(sum(10,20));



// function greet(user,byeCb){
//     alert("Hello! " + user + " Welcome to our website");

//     byeCb();
// }


// function bye(){
//     alert("Bye....................................");
// }


// greet("Ali",bye);



// alert("Above the setTimeout Function....");


// setTimeout(function(){
//     alert("Your data is recieved....");
// },1000);


// alert("Below 1 the setTimeout Function....");
// alert("Below 2 the setTimeout Function....");
// alert("Below 3 the setTimeout Function....");
// alert("Below 4 the setTimeout Function....");





// Destructing


// let arrCars = ["BMW","Lamborghini","Audi","Ferrari","Mastang","Toyota","4X4"];

// arrCars[0] = "Honda";
// let [first,,third,...rest] = arrCars;
// first = 101;
// // first = "Honda";
// console.log(first,third);
// console.log(rest);


// let arrCars = ["BMW","Lamborghini","Audi","Ferrari","Mastang","Toyota","4X4"];

// let [,...rem] = arrCars;


// let promise = new Promise((resolve,reject)=>{
//     let status = false;
//     if(status){
//         resolve("Data Recieved");
//     }else{
//         reject("Some Error Occured");
//     }
// })
// promise.then(result => console.log(result))
// .catch(error => console.log(error));



// function fethData(){
//     console.log("Fetching Data....");
//     console.log("Data Recieved....");
// }


// async function getData(){
//    await Promise.resolve(fethData());
// }


// getData();


// oop

// class User{

//     constructor(username, role = 'member') {
//     this.username = username;
//     this.role = role;
//   }


//      introduce(username) {
//        return `Hello! My name is ${username} and I am a ${this.role}`;
//     }


// }

// const user = new User();
// console.log(user.introduce("Laiba"));
