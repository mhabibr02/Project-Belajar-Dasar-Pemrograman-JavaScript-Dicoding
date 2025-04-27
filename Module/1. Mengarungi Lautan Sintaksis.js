const age : 22;
const name : 'Habib';
console.log('Aku ${name} berusia ${age} tahun.');

// Teks ini akan diabaikan oleh interpreter
console.log('Hai, Readers!');
console.log('Hai, JavaScript!');
// console.log('Hai, Dicoding!');

/*********************************************************************************************************************************************/

const PI = '3.14';
console.log(PI);

const id = 123;
let username = 'Dicoding';
console.log(id); // output: 123
console.log(username); //output: Dicoding

/*********************************************************************************************************************************************/

let username = 'Dicoding';
console.log('Sebelum diubah:', username); // output: Sebelum diubah: Dicoding
username = 'dicodingacademy';
console.log('Setelah diubah:', username); // output: Setelah diubah: dicodingacademy

const username = 'Dicoding';
console.log('Sebelum diubah:', username); // output: Sebelum diubah: Dicoding
username = 'dicodingacademy'; // TypeError: Assignment to constant variable. 
console.log('Setelah diubah:', username); // Tidak akan pernah dieksekusi

/*********************************************************************************************************************************************/

// Company data
const name = 'Dicoding';
const legal = 'LLC';
// Employee data
const name = 'John'; // SyntaxError: Identifier 'name' has already been declared
const division = 'IT';

function printCompanyInfo() {
    const name = 'Dicoding'; // <- nama variabel sama
    const legal = 'LLC';
    console.log('Company name:', name);
    console.log('Legal type:', legal);
  }
   
function printEmployeeInfo() {
    const name = 'John'; // <- nama variabel sama
    const division = 'IT';
    console.log('Employee name:', name);
    console.log('Division:', division);
  }
   
printCompanyInfo();
printEmployeeInfo();

// nama variabel yang benar
const firstName = 'Fulan';
const last_name = 'Lestari';
const $message = 'Hello, World!';
const userId1 = 123;
const userId2 = 456;
// nama variabel yang salah
const first-name = 'Fulan'; // tidak boleh mengandung karakter -
const last name = 'Lestari'; // tidak boleh mengandung spasi
const @message = 'Hello, World!'; // tidak boleh mengandung karakter @


// nama variabel yang benar
const firstName = 'Fulan';
const _secondName = 'Fulana';
// nama variabel yang salah karena diawali dengan angka
const 1stName = 'Fulan';
const 2ndName = 'Fulana';

const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;
console.log(text);

const result = 50 / 0;
console.log(result); // output: Infinity

/*********************************************************************************************************************************************/

const result = Number('Dicoding');
console.log(result); // output: NaN

/*********************************************************************************************************************************************/

const completed = true;
const passed = false;
console.log(completed, passed); // output: true false

/*********************************************************************************************************************************************/

const isGreater = 5 > 2;
console.log(isGreater); // output: true (5 lebih besar dari 2)

/*********************************************************************************************************************************************/

let message = null;
console.log(message); // output: null

/*********************************************************************************************************************************************/

let message;
console.log(message); // output: undefined

/*********************************************************************************************************************************************/

const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };
console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}

/*********************************************************************************************************************************************/

const number = 123;
const boolean = true;
const strNumber = String(number);
const strBoolean = boolean.toString();
console.log(strNumber); // output: "123"

/*********************************************************************************************************************************************/

const strNumber = '123';
const strFloat = '3.14';
const boolean = true;
const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);
console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14

/*********************************************************************************************************************************************/

const cm = '20cm';
const px = '64px';
const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);
console.log(intFromCM); // output: 20

const cm = '20.55cm';
const px = '64.23px';
const floatFromCM = parseFloat(cm);
const floatFromPX = parseFloat(px);
console.log(floatFromCM); // output: 20.55

/*********************************************************************************************************************************************/

const number = 123;
const string = 'Dicoding';
const empty = null;
const boolFromNumber = Boolean(number);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);
console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true

const age = 20;
const message = 'Umurku: ' + age;
console.log(message); // output: Umurku: 20

const strNumber = '123';
const result = strNumber * 2;
console.log(result); // output: 246

const bool = true;
const result = 1 + bool;
console.log(result); // output: 2

/*********************************************************************************************************************************************/

let age = 25;
 
// Unary operator
typeof age;
// Binary operator
5 + 4;
10 / 2;
age = 30;
// Ternary operator (conditional operator)
(age < 18) ? 'You are too young!' : 'Welcome onboard!'; 

6 + 5; // mengembalikan 11
7 - 2; // mengembalikan 5
8 * 5; // mengembalikan 40
10 / 3; // mengembalikan 3.33
10 % 2; // mengembalikan 0
2 *(10 + 2); // mengembalikan 24

/*********************************************************************************************************************************************/

const a = 10;
const b = 12;
console.log(a < b); // output: true
console.log(a > b); // output: false
// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true
// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true
// NOT
console.log(!true); // false
console.log(!false); // true

/*********************************************************************************************************************************************/