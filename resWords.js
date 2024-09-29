// // 1. var, let, const – Variable Declaration
// // These keywords are used to declare variables. The main difference between them is how they handle scope and reassignment.

// // var: Declares a variable globally or function-scoped.
// // let: Declares a block-scoped variable (preferred over var).
// // const: Declares a block-scoped constant, which cannot be reassigned.

// // Ex---------

// let age = 25;           // Can be reassigned
// const name = "John";    // Cannot be reassigned
// var isActive = true;    // Global or function-scoped

// // 2. if, else, else if – Conditional Statements
// // EX--------

// if (age >= 18) {
//     console.log("Adult");
// } else if (age >= 13) {
//     console.log("Teenager");
// } else {
//     console.log("Child");
// }


// // 3. for, while, do...while – Looping
// // These keywords are used to repeat a block of code multiple times.

// // for: A loop with a specific number of iterations.
// // while: A loop that runs as long as a condition is true.
// // do...while: Runs the code block first and then checks the condition.


// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let count = 0;
// while (count < 5) {
//     console.log(count);
//     count++;
// }

// let num = 0;
// do {
//     console.log(num);
//     num++;
// } while (num < 5);


// // 4. function – Function Declaration

// function greet(name) {
//     return "Hello, " + name;
// }
// console.log(greet("Alice")); // Output: "Hello, Alice"


// // 5. return – Return Value from Functions

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(3, 4)); // Output: 7


// 6. switch, case, default – Switch Statement

// let day = 2;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Other day");
// }


// var Month = [9,5];

// Month.forEach(function(A) {
// switch (A){
//     case 1:
//         console.log("januray")
//         break;
//     case 2:
//         console.log("february")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("April")
//         break;
//     case 5:
//         console.log("May")
//         break;
//     case 6:
//         console.log("June")
//         break;
//     case 7:
//         console.log("july")
//         break;
//     case 8:
//         console.log("Augest")
//         break;
//     case 9:
//         console.log("September")
//         break;
//     default:
//         console.log("No Month");
// }
// }
// )


let Name = ["A", "S", "K", "AK"]

Name.forEach(function(A){
    switch (A){
        case "A":
            console.log("Ak");
            break;
        case "S":
            console.log("Shuvo");
            break;
        case "Ak":
            console.log("Ak shuvo");
            break;
        default:
            
            break;    
        }
})

   

