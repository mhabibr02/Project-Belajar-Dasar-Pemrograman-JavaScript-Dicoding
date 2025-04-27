const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

/*********************************************************************************************************************************************/

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

/*********************************************************************************************************************************************/

let value = 0;

function addWith(addingValue) {
  value += addingValue;
  console.log(`Current value is ${value}`);
  return value;
}

const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3

/*********************************************************************************************************************************************/

function addWith(value, addingValue) {
    return value + addingValue;
}
  
const result1 = addWith(0, 1);
console.log(`result1 is ${result1}`); // Output: result1 is 1
  
const result2 = addWith(result1, 1);
console.log(`result2 is ${result2}`); // Output: result2 is 2
  
const result3 = addWith(result2, 1);
console.log(`result3 is ${result3}`); // Output: result3 is 3
  
console.log(result1, result2, result3); // Output: 1, 2, 3

/*********************************************************************************************************************************************/

// Menghitung total harga pesanan tanpa mengubah input
function calculateTotalPrice(orderItems) {
    return orderItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
}
   
// Memfilter dan memetakan data tanpa mengubah array asli
function getActiveUsernames(users) {
    return users
      .filter(user => user.isActive)
      .map(user => user.username);
}
   
// Membuat objek baru berdasarkan input tanpa mengubah input asli
function createUserProfile(user, address) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      address: {
        street: address.street,
        city: address.city,
        country: address.country
      }
    };
}
   
// Menggabungkan dua objek tanpa mengubah objek asli
function mergeSettings(defaultSettings, userSettings) {
    return {
      ...defaultSettings,
      ...userSettings
    };
}

/*********************************************************************************************************************************************/

// Mengubah nilai variabel global
let count = 0;
function increment() {
  count++;
}
 
// Mengakses waktu sistem
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
 
// Mengubah status objek yang diterima sebagai parameter
function updateUser(user) {
  user.name = "Updated Name";
}
 
// Menulis ke berkas
const fs = require('fs');
 
function writeToFile(data) {
  fs.writeFileSync('data.txt', data);
}

/*********************************************************************************************************************************************/

// Mengubah nilai variabel global
let count = 0;
function increment() {
  count++;
}
 
// Mengakses waktu sistem
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
 
// Mengubah status objek yang diterima sebagai parameter
function updateUser(user) {
  user.name = "Updated Name";
}
 
// Menulis ke berkas
const fs = require('fs');
 
function writeToFile(data) {
  fs.writeFileSync('data.txt', data);
}

/*********************************************************************************************************************************************/

function apply(operation, ...args) {
// kita bisa menambahkan kode lain sebelum operation dijalankan.
    
return operation(...args)
}
  
function sum(a, b, c) {
    return a + b + c;
}
  
function discount(disc, value) {
    return value - ((disc / 100) * value);
}
  
const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);
  
console.log('Product price:', productPrice); // Output: Product price: 400
console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 300

/*********************************************************************************************************************************************/

// menerima argumen sebuah fungsi
function memoize(fn) {
    const cache = new Map();
  
    // mengembalikan nilai berupa fungsi
    return function(...args) {
      const key = JSON.stringify(args);
  
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      const result = fn(...args);
      cache.set(key, result);
  
      return result;
    };
}
  
  
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}
  
  
const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);
  
console.time('Memoized Sum First Call');
console.log('Total:', memoizedSumArray(largeArray));
console.timeEnd('Memoized Sum First Call');
  
console.time('Memoized Sum Second Call (Cached)');
console.log('Total:', memoizedSumArray(largeArray));
console.timeEnd('Memoized Sum Second Call (Cached)');

/*********************************************************************************************************************************************/

function adjectivfy(adjective) {
    return function (noun) {
      return `${noun} ${adjective}.`;
    }
}
  
function multipleBy(x) {
    return function(y) {
      return x * y;
    }
}
  
const coolifier = adjectivfy('keren');
const funnifier = adjectivfy('seru');
  
const multipleByFive = multipleBy(5);
  
console.log(coolifier('Dicoding')); // Output: Dicoding keren.
console.log(funnifier('JavaScript')); // Output: JavaScript seru.
console.log(multipleByFive(7)); // Output: 35
console.log(multipleByFive(10)); // Output: 50

/*********************************************************************************************************************************************/

function addOne(x) {
    return x + 1;
}
  
function square(x) {
    return x * x;
}
  
function compose(f, g) {
    return (x) => {
      return f(g(x));
    }
}
  
const addOneAndSquare = compose(square, addOne);
  
console.log(addOneAndSquare(2)); // output: 9
/*********************************************************************************************************************************************/

const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]

/*********************************************************************************************************************************************/

function generateArray(n) {
    const result = [];
    for (let counter = 0; counter <= n; counter += 1) {
      result.push(counter);
    }
    return result;
}
  
console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

/*********************************************************************************************************************************************/

function generateArray(n) {
    if (n < 0) {
      return [];
    }
  
    return [...generateArray(n - 1), n];
}
  
console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

/*********************************************************************************************************************************************/

function max(arrayOfNumbers) {
    return arrayOfNumbers
      .sort((a, b) => a - b)
      .pop();
}
  
const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);
  
console.log(largest); // Output: 42
console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]

/*********************************************************************************************************************************************/

function registerEmail(person, email) {
    return Object.assign(person, { email });
}
  
const person = {
    name: 'John',
    username: 'johndoe',
};
  
const personWithEmail = registerEmail(person, 'john@dicoding.com');
  
console.log(person); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }

/*********************************************************************************************************************************************/

function max(arrayOfNumber) {
    // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
    return [...arrayOfNumber]
      .sort((a, b) => a - b)
      .pop();
}
  
function registerEmail(person, email) {
    // menggunakan spread operator untuk menduplikasi nilai person
    return { ...person, email };
}
  
const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);
  
console.log(largest); // Output: 42
console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]
  
const person = {
    name: 'John',
    username: 'johndoe',
};
  
const personWithEmail = registerEmail(person, 'john@dicoding.com');
  
console.log(person); // Output: { name: 'John', username: 'johndoe' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }

/*********************************************************************************************************************************************/

const oldArray = ['Harry', 'Ron', 'Jeff', 'Thomas']
const newArray = oldArray.map((name) => `${name}!`);

console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
console.log(oldArray); // Output: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ]

/*********************************************************************************************************************************************/

const truthyArray = [1, '', 'Halo', 0, null, 'Harry', 14]
  .filter((item) => Boolean(item));

console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]

/*********************************************************************************************************************************************/

const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
];
  
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
console.log(eligibleForScholarshipStudents);
  
/**
   * Output:
   * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
   * 
*/

/*********************************************************************************************************************************************/

const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
];
  
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
  
console.log(totalScore); // Output: 313

//

const user = {
    name: 'John',
    email: 'john@dicoding.com',
  };
  
  // Membekukan objek user
Object.freeze(user);
  
  // Mencoba mengubah properti dari objek yang dibekukan
user.email = 'doe@dicoding.com';
console.log(user); // Output: { name: 'John', email: 'john@dicoding.com' }

/*********************************************************************************************************************************************/

function deepFreeze(object) {
    Object.keys(object).forEach((name) => {
      const prop = object[name];
      if (typeof prop == 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });
  
    return Object.freeze(object);
  }
  
  const complexUser = {
    name: 'Bob',
    email: 'bob@dicoding.com',
    preferences: {
      newsletter: true,
      notifications: 'weekly',
      address: {
        city: 'New York',
        zip: '10001'
      }
    }
};
  
deepFreeze(complexUser);
  
  // Diabaikan
complexUser.preferences.address.city = 'Los Angeles';
  
console.log(complexUser.preferences.address.city); // Output: 'New York'

/*********************************************************************************************************************************************/

const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];
  
// 1. Mendapatkan produk berdasarkan kategori
  function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
}
  
// 2. Mencari produk berdasarkan ID
  function findProductById(products, id) {
    return products.find(product => product.id === id);
}
  
// 3. Menghitung total harga semua produk
  function calculateTotalPrice(products) {
    return products.reduce((total, product) => total + product.price, 0);
}
  
// 4. Menerapkan diskon pada harga produk
  function applyDiscount(products, discount) {
    return products.map(product => ({
      ...product,
      price: product.price - (product.price * (discount / 100))
    }));
}
  
// Contoh penggunaan
console.log(getProductsByCategory(sampleProducts, 'Electronics')); 
// Should return products with id 1 and 2
  
console.log(calculateTotalPrice(sampleProducts)); 
// Should return 1830
  
console.log(applyDiscount(sampleProducts, 10)); 
// Should return products with prices reduced by 10%
  
console.log(findProductById(sampleProducts, 3)); 
// Should return the product with id 3
  