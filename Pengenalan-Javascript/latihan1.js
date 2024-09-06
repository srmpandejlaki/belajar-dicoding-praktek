//let dan const = VARIABEL
let name = "Dicoding";
name = "Dicoding Academy";
console.log(name);
//let bisa diubah nilainya

const score = 1000;
// score = 500;
console.log(score);
// const bersifat konstan atau tidak bisa diubah nilainya


// TIPE DATA
let nilai;
console.log(typeof(nilai)); // undefined

// Number -> operasi aritmatika
let age = 24;
console.log(typeof(age));

let height = 165.3;
console.log(typeof(height));

// aritmatika pada number
let a = 7;
let b = 5;

console.log(a+b) // 12
console.log(a-b) // 2
console.log(a*b) // 35
console.log(a/b) // 1.4
console.log(a%b) // 2

// Increment & Decrement
let angka = 5;
angka++; // increment
console.log(angka) // 6

angka--; // decrement
console.log(angka) // 5

// String
let nama = "Dicoding"; // bisa '' dan ""
console.log(typeof(nama));

const question = '"What do you think of Javascript?" he asked';
console.log(question);

const answer = '"I think it\'s great!" I answered'; // escape string (\)
console.log(answer);

// Boolean 
let x = true;
let y = false;

console.log(typeof(x))
console.log(typeof(y))

// hasil operator operasi
const c = 10;
const d = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater); // false
console.log(isLess); // true

// Null 
let someLaterData = null;
console.log(someLaterData);


// FUNGSI -> bisa lebih dari 1 parameter dan default value
function greeting() {
    console.log("Selamat sore!");
}

greeting(); // pemanggilan fungsi

function salam(greet){
    console.log("Selamat " + greet + "!")
}

salam("malam"); // Selamat malam!
salam("pagi"); // Selamat pagi!