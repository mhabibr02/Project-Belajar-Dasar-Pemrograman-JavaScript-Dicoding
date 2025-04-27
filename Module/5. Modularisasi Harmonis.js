import { name, email, age } from './anotherfile.mjs';

console.log(name);
console.log(email);
console.log(age);

const name = 'John';
const email = 'john@gmail.com';
const age = 25;

export { name, email, age };

/*********************************************************************************************************************************************/

const name = 'John';
const email = 'john@gmail.com';
const age = 25;

export { name, email, age };

export function myFunction() {
    console.log('Ini dari user.js');
}

/*********************************************************************************************************************************************/

import { myFunction as userFunction } from './user.mjs';
import { myFunction as customerFunction } from './customer.mjs';

userFunction();
customerFunction();

