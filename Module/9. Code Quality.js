let myNum = 0;
myNum = 1;

console.log(myNum) // 1

myNum = true;

console.log(myNum) // true

/*********************************************************************************************************************************************/

function add(numA, numB) {
    return numA + numB;
}
  
console.log(add(1, 1)); // 2
console.log(add(3, 2)); // 5
console.log(add('5', 4)); // 54

/*********************************************************************************************************************************************/

const myName: string = 'Flow';
 
function greet(name: string) {
  console.log(`Hello, ${name}. My name is ${myName}`);
}
 
greet(123);

/*********************************************************************************************************************************************/

const myName: string = 'TypeScript';
 
function greet(name: string) {
  console.log(`Hello, ${name}. My name is ${myName}`);
}
 
greet('JavaScript');

/*********************************************************************************************************************************************/

const myName = 'TypeScript';
 
function greet(name) {
  console.log(`Hello, ${name}. My name is ${myName}`);
}
 
greet('JavaScript');

/*********************************************************************************************************************************************/

let no = 'Semicolon'
 
const my_favorite_color = '#112C85';
 
let myNumber = 3;
console.log(myNumber);
 
var random = 1; // declaring random to 1
 
if (foo) foo++;
 
let a = b = c = 5;

/*********************************************************************************************************************************************/

const no = 'Semicolon';
 
const myFavoriteColor = '#112C85';
 
const myNumber = 3;
console.log(myNumber);
 
// declaring random to 1
const random = 1;
 
if (foo) {
  foo++;
}
 
let a = 5;
let b = 5; 
let c = 5;

/*********************************************************************************************************************************************/

{
    rules: {
      "no-duplicate-imports": "off",
      "no-use-before-define": "error",
      "constructor-super": "error",
      "no-var": "warn",
      "no-unreachable": "warn",
      "no-extra-boolean-cast": "warn"
    }
}

/*********************************************************************************************************************************************/

// Fungsi untuk menghitung total harga belanjaan
function calculateTotal(shoppingCart) {
    let total = 0;
  
    // Penghitungan tagihan terjadi di sini…
    for (let i = 0; i <= shoppingCart.length; i += 1) {
      total += shoppingCart[i].price;
    }
  
    return total;
}
  
// Contoh data belanjaan
const shoppingCart = [
    { name: 'Apple', price: 300 },
    { name: 'Banana', price: 120 },
    { name: 'Orange', price: 130 },
];
  
// Memanggil fungsi dan mencetak hasilnya
console.log(`Total belanjaan: Rp ${calculateTotal(shoppingCart)}`);

/*********************************************************************************************************************************************/

function calculateTotal(shoppingCart) {
    const total = 0;
   
    return shoppingCart.reduce(
      (accumulator, cartItem) => accumulator + cartItem.price,
      total,
    );
}

/*********************************************************************************************************************************************/

const shoppingCart = [
    { name: 'Apple', price: 300 },
    { name: 'Banana', price: 120 },
    { name: 'Orange', price: 130 },
    { name: 'Watermelon', price: '160' },
    { name: 'Pineapple', price: null },
    { name: 'Grape', price: null },
];

/*********************************************************************************************************************************************/

function calculateTotal(shoppingCart) {
    const total = 0;
   
    return shoppingCart.reduce((accumulator, cartItem) => {
      if (typeof cartItem.price === 'number') {
        return accumulator + cartItem.price;
      } else {
        console.error(`Tipe data cartItem.price tidak valid:`, cartItem);
        return accumulator;
      }
    }, total);
}

/*********************************************************************************************************************************************/

// Fungsi untuk menghitung total harga belanjaan
function calculateTotal(shoppingCart) {
    const total = 0;
  
    return shoppingCart.reduce((accumulator, cartItem) => {
      if (typeof cartItem.price === 'number') {
        return accumulator + cartItem.price;
      } else {
        console.error(`Tipe data cartItem.price tidak valid:`, cartItem);
        return accumulator;
      }
    }, total);
}
  
// Contoh data belanjaan dengan beberapa kasus edge
const shoppingCart = [
    { name: 'Apple', price: 300 },
    { name: 'Banana', price: 120 },
    { name: 'Orange', price: 130 },
    { name: 'Watermelon', price: '160' },
    { name: 'Pineapple', price: null },
    { name: 'Grape', price: null },
];
  
// Memanggil fungsi dan mencetak hasilnya
console.log(`Total belanjaan: Rp ${calculateTotal(shoppingCart)}`);

/*********************************************************************************************************************************************/

export function add(numA, numB) {
    return numA + numB;
}

import { test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

test('should add correctly', () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValue = add(operandA, operandB);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});

/*********************************************************************************************************************************************/

export function add(numA, numB) {
    return numA + numB;
}

/*********************************************************************************************************************************************/

import { test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

test('should add correctly', () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValue = add(operandA, operandB);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});

test('should throw an error if string passed on numA parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = '5';
    const operandB = 4;

    // Action
    add(operandA, operandB);
  };

  // Assert
  assert.throws(potentialErrorToBeThrew, Error);
});

/*********************************************************************************************************************************************/

export function add(numA, numB) {
    return numA + numB;
}

/*********************************************************************************************************************************************/

import { test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

test('should add correctly', () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValue = add(operandA, operandB);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});

test('should throw an error if string passed on numA parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = '5';
    const operandB = 4;

    // Action
    add(operandA, operandB);
  };

  // Assert
  assert.throws(potentialErrorToBeThrew, Error);
});

/*********************************************************************************************************************************************/

export function add(numA, numB) {
    if (typeof numA !== 'number') {
      throw new Error('Expected a number');
    }
  
    return numA + numB;
}

/*********************************************************************************************************************************************/

import { test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';
 
test('should add correctly', () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;
 
  // Action
  const actualValue = add(operandA, operandB);
 
  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});
 
test('should throw an error if string passed on numA parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = '5';
    const operandB = 4;
 
    // Action
    add(operandA, operandB);
  };
 
  // Assert
  assert.throws(potentialErrorToBeThrew, Error);
});
 
test('should throw an error if string passed on numB parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = 10;
    const operandB = '8';
 
    // Action
    add(operandA, operandB);
  };
 
  // Assert
  assert.throws(potentialErrorToBeThrew, Error);
});

/*********************************************************************************************************************************************/

export function add(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
      throw new Error('Expected a number');
    }
   
    return numA + numB;
}

import { test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

test('should add correctly', () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValue = add(operandA, operandB);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue);
});

test('should throw an error if string passed on numA parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = '5';
    const operandB = 4;

    // Action
    add(operandA, operandB);
  };

  // Assert
  assert.throws(potentialErrorToBeThrew, Error);
});

test('should throw an error if string passed on numB parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = 10;
    const operandB = '8';

    // Action
    add(operandA, operandB);
  };

  // Assert
  assert.throws(potentialErrorToBeThrew, Error);
});

/*********************************************************************************************************************************************/

export function add(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
      throw new Error('Expected a number');
    }
  
    return numA + numB;
}

/*********************************************************************************************************************************************/

import { describe, test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';
 
describe('Calculator', () => {
  test('should add correctly', () => {
    /* ...kode disembunyikan… */
  });
 
  test('should throw an error if string passed on numA parameter', () => {
    /* ...kode disembunyikan… */
  });
 
  test('should throw an error if string passed on numB parameter', () => {
    /* ...kode disembunyikan… */
  });
});

/*********************************************************************************************************************************************/

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

describe('Calculator', () => {
  it('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = add(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });

  it('should throw an error if string passed on numA parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = '5';
      const operandB = 4;

      // Action
      add(operandA, operandB);
    };

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
  });

  it('should throw an error if string passed on numB parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = 10;
      const operandB = '8';

      // Action
      add(operandA, operandB);
    };

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
  });
});

/*********************************************************************************************************************************************/

export function add(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
      throw new Error('Expected a number');
    }
  
    return numA + numB;
}

/*********************************************************************************************************************************************/

import { it, describe, expect } from 'bun:test';
 
describe('arithmetic', () => {
  it('1 + 1', () => {
    expect(2 + 2).toBe(4);
  });
 
  it('3 * 2', () => {
    expect(3 * 2).toBe(6);
  });
});

/*********************************************************************************************************************************************/

import { it, describe, expect } from 'bun:test';
 
describe('Fitur 1', () => {
  it('harus dapat A', () => {
    expect('A').toBe('A');
  });
 
  it('harus dapat B', () => {
    expect('B').not.toBe('A');
  });
});

/*********************************************************************************************************************************************/

import { describe, it, expect } from 'bun:test';
 
function add(numA, numB) {
  return numA + numB;
}
 
describe('Calculator', () => {
  it('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;
 
    // Action
    const actualValue = add(operandA, operandB);
 
    // Assert
    const expectedValue = 2;
    expect(actualValue).toBe(expectedValue);
  });
});

/*********************************************************************************************************************************************/

function add(numA, numB) {
    return numA + numB;
}
   
console.log(add(1, 1)); // 2
console.log(add(3, 2)); // 5
console.log(add('5', 4)); // "54"

//

const myName: string = 'Flow';
 
function greet(name: string) {
  console.log(`Hello, ${name}. My name is ${myName}`);
}
 
greet('JavaScript');

/*********************************************************************************************************************************************/

import { describe, it } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';
 
describe('Calculator', () => {
  it('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;
 
    // Action
    const actualValue = add(operandA, operandB);
 
    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });
});

/*********************************************************************************************************************************************/

import { it, describe, expect } from 'bun:test';
 
describe('arithmetic', () => {
  it('1 + 1', () => {
    expect(2 + 2).toBe(4);
  });
 
  it('3 * 2', () => {
    expect(3 * 2).toBe(6);
  });
});