const user = {
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
};

const user = {
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
};
  
console.log(user.name); // Output: Dicoding

/*********************************************************************************************************************************************/

const user = {
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
};
  
console.log(user['last name']); // Output: Indonesia

/*********************************************************************************************************************************************/

const user = {
    'name': 'Dicoding',
    'lastName': 'Indonesia',
    age: 9
};
  
const { name, lastName } = user;
console.log(name, lastName); // Output: Dicoding Indonesia

/*********************************************************************************************************************************************/

const user = {
    'name': 'Dicoding',
    'Last name': 'Indonesia',
    age: 9
};
  
const { name, lastName, isMale = false } = user;
console.log(isMale); // Output: false

/*********************************************************************************************************************************************/

const user = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
};

const user = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
};
  
const { id, email } = user;
  
console.log(id, email);

/*********************************************************************************************************************************************/

const user = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
};
  
const id = user.id;
const email = user.email;
  
console.log(id, email);

/*********************************************************************************************************************************************/

const account = {
    balance: 1000,
    debt: 10,
};
  
account.balance = 2000;
console.log(account.balance); // Output: 2000

/*********************************************************************************************************************************************/

const user = {
    'name': 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
};
  
delete user.age;
console.log(user); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }

/*********************************************************************************************************************************************/

const user = {
    'name': 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
};
  
delete user['age'];
console.log(user); // Output: { name: 'Dicoding', lastName: 'Indonesia' }

/*********************************************************************************************************************************************/

const array = [1, 2];
console.log(typeof array); // Output: object

/*********************************************************************************************************************************************/

const foo = Array.from('foo');
console.log(foo); // Output: ['f', 'o', 'o']

/*********************************************************************************************************************************************/

const users = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]

/*********************************************************************************************************************************************/

const array = [];
const fruits = ['apple', 'banana', 'cherry'];

const fruits = ['apple', 'banana', 'cherry', '', 'grape'];
console.log(fruits); // Output: ['apple', 'banana', 'cherry', '', 'grape']

/*********************************************************************************************************************************************/

const myArray = [42, 55, 30];
console.log(myArray[1]); // Output: 55

/*********************************************************************************************************************************************/

let myArray = [1, 2, 3, 4, 5];
myArray[1] = 10;
console.log(myArray); // Output: [1, 10, 3, 4, 5]

/*********************************************************************************************************************************************/

let myArray = [1, 2, 3, 4, 5];
myArray.push(6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

/*********************************************************************************************************************************************/

let myArray = ['Android', 'Data Science', 'Web'];
delete myArray[1];
console.log(myArray); // Output: ['Android', <1 empty item>, 'Web']

/*********************************************************************************************************************************************/

let myArray = ['Android', 'Data Science', 'Web'];
myArray.splice(1, 1);
console.log(myArray); // Output: ['Android', 'Web']

/*********************************************************************************************************************************************/

let myArray = ['Android', 'Data Science', 'Web'];
myArray.splice(1, 2);
console.log(myArray); // Output: ['Android']

/*********************************************************************************************************************************************/

let myArray = ['Android', 'Data Science', 'Web'];
myArray.shift();
console.log(myArray); // Output: ['Data Science', 'Web']

/*********************************************************************************************************************************************/

let myArray = ['Android', 'Data Science', 'Web'];
myArray.pop();
console.log(myArray); // Output: ["Android", "Data Science"]

/*********************************************************************************************************************************************/

const introduction = ['Hello', 'Arsy'];
const [greeting, name] = introduction;
console.log(greeting); // Output: Hello

/*********************************************************************************************************************************************/

const myArray = ['Android', 'Data Science', 'Web'];
myArray.reverse();
console.log(myArray); // Output: [ 'Web', 'Data Science', 'Android' ]

/*********************************************************************************************************************************************/

const myArray = ['Android', 'Data Science', 'Web'];
myArray.reverse();
console.log(myArray); // Output: [ 'Web', 'Data Science', 'Android' ]

/*********************************************************************************************************************************************/

const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
]);
  
console.log(productMap);

const map = new Map();
map.set('name', 'aras');
console.log(map); // Map(1) { 'name' => 'aras' }

/*********************************************************************************************************************************************/

const map = new Map();
map.set('name', 'aras');
console.log(map); // Map(1) { 'name' => 'aras' }

/*********************************************************************************************************************************************/

const map = new Map();
map.set('name', 'aras');
console.log(map.get('name')); // Output: aras

/*********************************************************************************************************************************************/

const map = new Map();
map.set('name', 'aras');
map.set('last name', 'opraza');
map.delete('last name');
console.log(map); // Map(1) { 'name' => 'aras' }

/*********************************************************************************************************************************************/

const set = new Set();
set.add(1);
set.add('Apple');
set.add(1);
set.add('Apple');
console.log(set); // Output: Set { 1, 'Apple' }

/*********************************************************************************************************************************************/

const set = new Set();
set.add(1);
set.add(2);

for (const number of set) {
  console.log(number); // Output: 1, 2
}

/*********************************************************************************************************************************************/

const set = new Set();
set.add(1);
set.add(2);
set.forEach((value) => console.log(value)); // Output: 1, 2

/*********************************************************************************************************************************************/

const set = new Set();
set.add(1);
set.add(2);
set.delete(1);
console.log(set); // Set(1) { 2 }

/*********************************************************************************************************************************************/

const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 };
console.log(newObj); // Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }

/*********************************************************************************************************************************************/

const originalObj = { name: 'Dicoding', age: 9 };
const copiedObj = { ...originalObj };
console.log(copiedObj); // Output: { name: 'Dicoding', age: 9 }

/*********************************************************************************************************************************************/

const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const newArray = [...array1, ...array2];
console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']

/*********************************************************************************************************************************************/

const original = ['apple', 'banana', 'cherry'];
const copy = [...original];
console.log(copy); // Output: ['apple', 'banana', 'cherry']

/*********************************************************************************************************************************************/

function myFunc(...name) {
    console.log('name:', name);
}
  
myFunc('Rafy', 'Fikri', 'Dimas');

function myFunc(number, ...name) {
    console.log('number', number);
    console.log('name', name);
}
  
myFunc('one', 'Arsy', 'Aras');

function myFunc(...name) {
    console.log(name.length);
    console.log('name', name);
}
  
myFunc('Adi', 'Nur', 'Arif');

const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];
const [first, second, ...rest] = favorites;
  
console.log(first);
console.log(second);
console.log(rest);
  
/**
* output:
* Nasi Goreng
* Mie Goreng
* [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
*/

