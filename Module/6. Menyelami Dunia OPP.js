function Person(name, age) {
    this.name = name;
    this.age = age;
}
   
Person.prototype.eat = function() {
    console.log(`${this.name} is eating`);
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
 
console.log(person1.name); // Output: Alice
console.log(person2.name); // Output: Bob

/*********************************************************************************************************************************************/
 
person1.eat();
person2.eat();

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    eat() {
      console.log(`${this.name} is eating`);
    }
}
  
// Membuat instance dari Person
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
  
console.log(person1.name); // Output: Alice
console.log(person2.name); // Output: Bob
  
person1.eat(); // Output: Alice is eating
person2.eat(); // Output: Bob is eating

/*********************************************************************************************************************************************/

class SmartPhones {
    constructor(color, brand, model) {
      this.color = color;
      this.brand = brand;
      this.model = model;
    }
  
    charging() {
      console.log(`Charging ${this.model}`);
    }
}
  
class iOS extends SmartPhones {
    airDrop() {
      console.log('iOS have a behavior AirDrop');
    }
}
  
class Android extends SmartPhones {
    splitScreen() {
      console.log('Android have a Split Screen');
    }
}
  
const ios = new iOS('black', 'A', '12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');
  
ios.charging(); // Output: Charging 12 Pro Max
ios.airDrop(); // Output: iOS have a behavior AirDrop
  
android.charging(); // Output: Charging Galaxy S21
android.splitScreen(); // Output: Android have a Split Screen

/*********************************************************************************************************************************************/

function SmartPhones(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
}
  
SmartPhones.prototype.charging = function() {
    console.log(`Charging ${this.model}`);
};
  
function iOS(color, brand, model) {
    SmartPhones.call(this, color, brand, model);
}
  
iOS.prototype = Object.create(SmartPhones.prototype);
iOS.prototype.constructor = iOS;
  
iOS.prototype.airDrop = function() {
    console.log('iOS have a behavior AirDrop');
};
  
function Android(color, brand, model) {
    SmartPhones.call(this, color, brand, model);
}
  
Android.prototype = Object.create(SmartPhones.prototype);
Android.prototype.constructor = Android;
  
Android.prototype.splitScreen = function() {
    console.log('Android have a Split Screen');
};
  
const ios = new iOS('black', 'A', '12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');
  
ios.charging(); // Output: Charging 12 Pro Max
ios.airDrop(); // Output: iOS have a behavior AirDrop
  
android.charging(); // Output: Charging Galaxy S21
android.splitScreen(); // Output: Android have a Split Screen

/*********************************************************************************************************************************************/

class SmartPhones {
    constructor(color, brand, model) {
      this.color = color;
      this.brand = brand;
      this.model = model;
    }
  
    charging() {
      console.log(`Charging ${this.model}`);
    }
}
  
class iOS extends SmartPhones {
    airDrop() {
      console.log('iOS have a behavior AirDrop');
    }
}
  
class Android extends SmartPhones {
    splitScreen() {
      console.log('Android have a Split Screen');
    }
}
  
const ios = new iOS('black', 'A', '12 Pro Max');
const android = new Android('white', 'B', 'Galaxy S21');
  
console.log(ios instanceof SmartPhones); // Output: true
console.log(android instanceof SmartPhones); // Output: true

class CoffeMachine {
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this.temperature = 90;
    }
  
    makeCoffe() {
      console.log('Membuat kopi dengan suhu', this.temperature);
    }
}
 
/*********************************************************************************************************************************************/

const coffee = new CoffeMachine(100);
coffee.temperature = 60;
  
coffee.makeCoffe(); // Output: Membuat kopi dengan suhu 60

class CoffeeMachine {
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this._temperature = 90
    }
  
    set temperature(temperature) {
      console.log('you are not allowed to change the temperature');
    }
  
    get temperature() {
      return this._temperature;
    }
}
  
const coffee = new CoffeeMachine(10);
console.log('Sebelum diubah: ', coffee.temperature);
coffee.temperature = 100;
console.log('Setelah diubah: ', coffee.temperature);

/*********************************************************************************************************************************************/

class CoffeeMachine {
    #temperature = 90;
  
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this.#temperature = this.#defaultTemperature();
    }
  
    set temperature(temperature) {
      console.log('you are not allowed to change the temperature');
    }
  
    get temperature() {
      return this.#temperature;
    }
  
    #defaultTemperature() {
      return 90;
    }
}

class SmartPhones {
    constructor(color, brand, model) {
      this.color = color;
      this.brand = brand;
      this.model = model;
    }
   
    charging() {
      console.log(`Charging ${this.model}`);
    }
}

class SmartPhones {
    constructor(color, brand, model) {
      this.color = color;
      this.brand = brand;
      this.model = model;
    }
   
    charging() {
      console.log(`Charging ${this.model}`);
    }
}
   
   
class Android extends SmartPhones {
    // overriding constructor
    constructor(color, brand, model, device) {
      super(color, brand, model);
      this.device = device;
    }
   
    splitScreen() {
      console.log('Android have a Split Screen');
    }
}

class SmartPhones {
    constructor(color, brand, model) {
      this.color = color;
      this.brand = brand;
      this.model = model;
    }
   
    charging() {
      console.log(`Charging ${this.model}`);
    }
}
   
   
  class Android extends SmartPhones {
    constructor(color, brand, model, device) {
      super(color, brand, model);
      this.device = device;
    }
   
    splitScreen() {
      console.log('Android have a Split Screen');
    }
}
   
const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');

/*********************************************************************************************************************************************/

class Android extends SmartPhones {
    constructor(color, brand, model, device) {
      super(color, brand, model);
      this.device = device;
    }
   
    charging() {
      console.log(`Charging ${this.model} with fast charger`);
    }
   
    splitScreen() {
      console.log('Android have a Split Screen');
    }
}

class Android extends SmartPhones {
    constructor(color, brand, model, device) {
      super(color, brand, model);
      this.device = device;
    }
   
    charging() {
      // memanggil method charging dari SuperClass (SmartPhones)
      super.charging();
      console.log(`Charging ${this.model} with fast charger`);
    }
   
    splitScreen() {
      console.log('Android have a Split Screen');
    }
}

class SmartPhones {
    constructor(color, brand, model) {
      this.color = color;
      this.brand = brand;
      this.model = model;
    }
  
    charging() {
      console.log(`Charging ${this.model}`);
    }
}
  
class Android extends SmartPhones {
    constructor(color, brand, model, device) {
      super(color, brand, model);
      this.device = device;
    }
  
    charging() {
      super.charging();
      console.log(`Charging ${this.model} with fast charger`);
    }
  
    splitScreen() {
      console.log('Android have a Split Screen');
    }
}
  
const android = new Android('white', 'B', 'Galaxy S21', 'smart TV');
  
android.charging();
  
/**
* Output:
* Charging Galaxy S21
* Charging Galaxy S21 with fast charger
*/

/*********************************************************************************************************************************************/

class Character {
    constructor(name, health, position) {
      this.name = name;
      this.health = health;
      this.position = position;
    }
   
    canMove() {
      console.log(`${this.name} moves to ${this.position}!`);
    }
}
   
   
class Monster extends Character {
    canAttack() {
      console.log(`${this.name} attacks with a weapon!`);
    }
}
   
class Guardian extends Character {
    canDefend() {
      console.log(`${this.name} defends with a shield!`);
    }
}
   
class Wizard extends Character {
    canCastSpell() {
      console.log(`${this.name} casts a magic spell!`);
    }
}

class Warrior extends Character {
    canAttack() {
      console.log(`${this.name} attacks with a weapon!`);
    }
   
    canDefend() {
      console.log(`${this.name} defends with a shield}!`);
    }
}

/*********************************************************************************************************************************************/

function canAttack(character) {
    return {
      attack: () => {
        console.log(`${character} attacks with a weapon!`);
      }
    }
  }
   
  function canDefend(character) {
    return {
      defend: () => {
        console.log(`${character} defends with a shield!`);
      }
    }
  }
   
  function canCastSpell(character) {
    return {
      castSpell: () => {
        console.log(`${character} casts a spell!`);
      }
    }
}

function createMonster(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(name));
}
   
function createGuardian(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefend(name));
}
   
function createWizard(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canCastSpell(name));
}
   
function createWarrior(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefend(character));
}

/*********************************************************************************************************************************************/

class Character {
    constructor(name, health, position) {
      this.name = name;
      this.health = health;
      this.position = position;
    }
   
    canMove() {
      console.log(`${this.name} moves to another position!`);
    }
}
   
  function canAttack(character) {
    return {
      attack: () => {
        console.log(`${character.name} attacks with a weapon!`);
      }
    };
}
   
  function canDefend(character) {
    return {
      defend: () => {
        console.log(`${character.name} defends with a shield!`);
      }
    };
}
   
  function canCastSpell(character) {
    return {
      castSpell: () => {
        console.log(`${character.name} casts a spell!`);
      }
    };
}
   
  function createMonster(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character));
}
   
  function createGuardian(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefend(character));
}
   
  function createWizard(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canCastSpell(character));
}
   
  function createWarrior(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefend(character));
}
   
const monster = createMonster('Monster');
monster.canMove();
monster.attack();
   
const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();
   
const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();
   
const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();