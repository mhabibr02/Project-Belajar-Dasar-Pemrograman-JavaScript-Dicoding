const gajian = true;

console.log('Berjalan-jalan di mal');
if (gajian) {
  console.log('Makan di restoran mal');
}
console.log('Pulang ke rumah');

const score = 66;

if (score >= 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}

const score = 85;

if (score > 90) {
  console.log('Selamat, Anda mendapatkan nilai A!');
} else if (score > 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}

/*********************************************************************************************************************************************/

const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

const fruit = 'apple';

switch (fruit) {
case 'banana':
    console.log('I am a banana.');
    break;
case 'apple':
    console.log('I am an apple.');
    break;
case 'orange':
    console.log('I am an orange.');
    break;
case 'strawberry':
    console.log('I am a strawberry.');
    break;
default:

const day = new Date().getDay();

/*********************************************************************************************************************************************/

if (day === 0) {
  console.log('Minggu');
} else if (day === 1) {
  console.log('Senin');
} else if (day === 2) {
  console.log('Selasa');
} else if (day === 3) {
  console.log('Rabu');
} else if (day === 4) {
  console.log('Kamis');
} else if (day === 5) {
  console.log('Jumat');
} else if (day === 6) {
  console.log('Sabtu');
} else {
  console.log('Hari tidak valid');
}

const day = new Date().getDay();

switch (day) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}

const number = 2;

const number = 2;

switch (number) {
case 1:
  console.log('Ini 1');
  break;
case 2:
  console.log('Ini 2');
case 3:
  console.log('Ini 3');
  break;
default:
  console.log('Ini default');
}

const foods = ['Nasi Goreng', 'Pasta', 'Sate'];

console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

/*********************************************************************************************************************************************/

for (let i = 0; i < 5; i++) {
    console.log(`Angka ke-${i} adalah ${i}`);
}

const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
  console.log(item);
}

let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}

let i = 0;

do {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
} while (i < 5);

for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
  
    console.log(i);
}

const price = 100;
const paid = 80;

/*********************************************************************************************************************************************/

if (paid < price) {
  throw new Error('Pembayaran kurang');
}

try {
    console.log('Memulai program');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena tidak ada error, blok ini akan diabaikan');
}

try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
  } catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
}

try {
    console.log('Ini try block');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
}

try {
    console.log('Ini try block');
    throw new Error('Error: Program berhenti');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
}

function checkGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
      if (typeof grades[i] !== 'number') {
        throw new Error('Invalid input. Please provide an array of numbers.');
      }
  
      const grade = grades[i];
      let predicate;
  
      if (grade >= 90) {
        predicate = 'A';
      } else if (grade >= 80) {
        predicate = 'B';
      } else if (grade >= 70) {
        predicate = 'C';
      } else if (grade >= 60) {
        predicate = 'D';
      } else {
        predicate = 'E';
      }
  
      console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
    }
  }
  
  try {
    const studentGrades = [95, 85, 65, 80, 70];
    checkGrades(studentGrades);
  } catch (e) {
    console.error(e);
}

function checkGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
      if (typeof grades[i] !== 'number') {
        throw new Error('Invalid input. Please provide an array of numbers.');
      }
   
      const grade = grades[i];
      let predicate;
   
      if (grade >= 90) {
        predicate = 'A';
      } else if (grade >= 80) {
        predicate = 'B';
      } else if (grade >= 70) {
        predicate = 'C';
      } else if (grade >= 60) {
        predicate = 'D';
      } else {
        predicate = 'E';
      }
   
      console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
    }
  }
   
  try {
    const studentGrades = [95, 85, 65, 80, 70];
    checkGrades(studentGrades);
  } catch (e) {
    console.error(e);
}

function categorizeNumber(input) {
    if (typeof input !== 'number' || !Number.isInteger(input)) {
      throw new Error("Input harus berupa bilangan bulat");
    }
  
    if (input === 0) {
      return "Nol";
    }
  
    if (input < 0) {
      return "Negatif";
    }
  
    // Cek bilangan prima
    if (input > 1) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        return "Prima";
      }
    }
  
    // Cek genap atau ganjil
    if (input % 2 === 0) {
      return "Genap";
    } else {
      return "Ganjil";
    }
  }
  
  // Contoh
  console.log(categorizeNumber(15)); // Output: "Ganjil"
  console.log(categorizeNumber(12)); // Output: "Genap"
  console.log(categorizeNumber(17)); // Output: "Prima"
  console.log(categorizeNumber(0));  // Output: "Nol"
  console.log(categorizeNumber(-5)); // Output: "Negatif"
  
  try {
    categorizeNumber('abc');
  } catch (error) {
    console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}
  