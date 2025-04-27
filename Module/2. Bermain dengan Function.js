const temperatureInCelsius = 90;
const temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit);
/* Output:
Hasil konversi: 194
*/

/*********************************************************************************************************************************************/

let temperatureInCelsius;
let temperatureInFahrenheit;
temperatureInCelsius = 50;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 122
temperatureInCelsius = 70;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 158
temperatureInCelsius = 100;
temperatureInFahrenheit = 9 / 5 * temperatureInCelsius + 32;
console.log('Hasil konversi:', temperatureInFahrenheit); // output -> Hasil konversi: 212

/*********************************************************************************************************************************************/

function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  
    console.log('Hasil konversi:', temperatureInFahrenheit);
}
  
const temperatureInCelsius = 90;
  
// Hanya menampilkan nilai function
console.log(convertCelsiusToFahrenheit);
// Output => [Function: convertCelciusToFahrenheit]
// Akan menjalankan isi function
convertCelsiusToFahrenheit(temperatureInCelsius);
// Output => Hasil konversi: 194

/*********************************************************************************************************************************************/

greetWorld();

function greetWorld() {
  console.log('Hello, world!');
}
/* Output:
Hello, world!
*/

/*********************************************************************************************************************************************/

function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
    console.log('Hasil konversi:', temperatureInFahrenheit);
}
  
convertCelsiusToFahrenheit();
  
/* Output:
Hasil konversi: NaN
*/

/*********************************************************************************************************************************************/

function convertCelsiusToFahrenheit(temperature) {
    if (temperature !== undefined) { // <-- conditional statement (perintah kondisional)
      const temperatureInFahrenheit = 9 / 5 * temperature + 32;
   
      console.log('Hasil konversi:', temperatureInFahrenheit);
    }
}

function convertCelsiusToFahrenheit(temperature = 50) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
  
    console.log('Hasil konversi:', temperatureInFahrenheit);
}
  
// Menggunakan default value
convertCelsiusToFahrenheit(); // output: Hasil konversi: 122
  
// Menggantikan default value
convertCelsiusToFahrenheit(90); // output: Hasil konversi: 194

/*********************************************************************************************************************************************/

const result = console.log('JavaScript keren!');
console.log(result);

/* Output:
JavaScript keren!
undefined
*/

/*********************************************************************************************************************************************/

function sumNumbers(a, b) {
    const result = a + b;
    return result;
}
  
const result = sumNumbers(2, 4);
console.log('2 + 4:', result);
  
/* Output:
2 + 4: 6
*/

/*********************************************************************************************************************************************/

function convertCelsiusToFahrenheit(temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
}
  
const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
  
/* Output:
Hasil konversi: 194
*/

/*********************************************************************************************************************************************/

function multiply(a, b) {
    return a * b;
}
  
function calculate(operation, numA, numB) {
    return operation(numA, numB);
}
  
const result = calculate(multiply, 2, 4);
console.log(result);
  
/* Output:
8
*/

/*********************************************************************************************************************************************/

function multiplier(x) {
    return function (num) {
      return x * num;
    };
}
  
const double = multiplier(2);
const triple = multiplier(3);
  
console.log(double(10));
console.log(triple(11));
  
/* Output:
20
33
*/

/*********************************************************************************************************************************************/
  
let temperatureInFahrenheit = null;

// Deklarasi function dengan Regular Function
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

/*********************************************************************************************************************************************/

// Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194

/*********************************************************************************************************************************************/

let temperatureInFahrenheit;

// Arrow function
const convertCelsiusToFahrenheit = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

// Arrow function versi ringkas
const convertCelsiusToFahrenheitInConciseSyntax = 
  (temperature) => (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
// Hasil ==> Hasil konversi: 194
//       ==> Hasil konversi: 194