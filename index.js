
// let ar = [31, 23, 22, 11, 34, 32, 97, 100, 33, 44, 105, 101, 77, 88, 3, 12];
// let lengthOfArray = ar.length;
// let ascArr = [];
// let a = 0;
// let same = 0;

// for (let i = 0; i < lengthOfArray; i++) {
//     console.log(i)
//     for (let j = 0; j < ar.length; j++) {
//         if (ar[j] > a) {
//             a = ar[j];
//         }
//     }
//     ascArr.push(a);
//     ar = ar.filter(val => val !== a);
//     console.log(ar)
//     console.log(ar.length);
//     a = 0;
// }

// console.log(ascArr, ar)

//asc

// let arra = [31, 9, 22, 43, 34, 32, 97, 100, 33, 44, 105, 101, 77, 88, 3, 12];
// let b = 0;

// for (let i = 0; i < arra.length; i++) {
//     for (let j = 0; j < arra.length; j++) {
//         if (arra[j] > b && j >= i) {
//             b = arra[j]
//         }
//     }
//     arra = arra.filter(val => val !== b);
//     arra.unshift(b);
//     b = 0;
// }
// console.log(arra, same)

// //desc

// let ar = [31, 9, 22, 43, 34, 32, 97, 100, 33, 44, 105, 101, 77, 88, 3, 12];
// let a = 0;

// for (let i = 0; i < ar.length; i++) {
//     for (let j = 0; j < ar.length; j++) {
//         if (ar[j] > a && j >= i) {
//             a = ar[j]
//         }
//     }
//     ar = ar.filter(val => val !== a);
//     // console.log(ar.filter(val => val !== a))
//     // ar = [a].concat(ar)
//     ar.splice(i, 0, a)
//     // console.log(ar.unshift(a))
//     a = 0;
// }
// console.log(ar)

// const a = { name: "Talha" } === { name: "Talha" } return false

// console.log(!!"")
// _________________

// let a = "";

// console.log(a || "Maxilimian")  returns Maximilian if a is empty otherwise a 

//________________

// const isLoggedIn = false;

// console.log(isLoggedIn && "OK");


// let age = "asd";

// function greet() {
//     console.log(age);
// }

// greet();

var age = "asd";
let boss = "ALI";

if (age === "asd") {
    var bb = "pp";
    let vv = "asd";
    let boss = "aaa";
    console.log(boss)
}

console.log(bb) //displays values , not give an error
console.log(boss)

function greet() {
    var dd = "zxzxzx";
    console.log(age, dd);
}

greet();
console.log(age, dd) // gives error