const estimationTime = 10_000;

setTimeout(() => {
  console.log('Hello, world!');
}, estimationTime);

/* Output:
Hello, world!
*/

/*********************************************************************************************************************************************/

import { makeCoffee } from './coffee.mjs';

console.log('Saya memesan kopi di kafe.');

makeCoffee();

console.log('Pramusaji memberikan kopi pesanan.');
console.log('Saya mendapatkan kopi dan menghabiskannya.');

/*********************************************************************************************************************************************/
export function makeCoffee() {
    // 1000 milidetik = 1 detik
    const estimationTime = 5000;
  
    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);
  
    setTimeout(() => {
      // Do some tasks to make coffee...
      console.log('Pramusaji selesai membuat kopi.');
    }, estimationTime);
}

/*********************************************************************************************************************************************/

import { makeCoffee } from './coffee.mjs';

console.log('Saya memesan kopi di kafe.');

makeCoffee(() => {
  console.log('Pramusaji memberikan kopi pesanan.');
  console.log('Saya mendapatkan kopi dan menghabiskannya.');
});

/*********************************************************************************************************************************************/

export function makeCoffee(callback) {
    const estimationTime = 5000;
  
    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);
  
    setTimeout(() => {
      // Do some tasks to make coffee...
      console.log('Pramusaji selesai membuat kopi.');
  
      callback();
    }, estimationTime);
}

/*********************************************************************************************************************************************/

import { makeCoffee, sendCoffee } from './coffee.mjs';

console.log('Saya memesan kopi di kafe.');

makeCoffee(() => {
  sendCoffee(() => {
    console.log('Pramusaji memberikan kopi pesanan.');
    console.log('Saya mendapatkan kopi dan menghabiskannya.');
  });
});

/*********************************************************************************************************************************************/

export function makeCoffee(callback) {
    const estimationTime = 5000;
  
    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);
  
    setTimeout(() => {
      // Do some tasks to make coffee...
  
      console.log('Pramusaji selesai membuat kopi.');
      callback();
    }, estimationTime);
  }
  
  export function sendCoffee(callback) {
    const estimationTime = 2000;
  
    console.log('Pramusaji sedang mengantarkan kopi pesanan');
  
    setTimeout(() => {
      // Do some tasks to send coffee...
  
      console.log('Pramusaji sudah sampai ke meja.');
      callback();
    }, estimationTime);
}

/*********************************************************************************************************************************************/

import { makeCoffee, sendCoffee } from './coffee.mjs';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
  if (makeCoffeeError) {
    // Do something with error
    console.error(makeCoffeeError);
    return;
  }

  sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
    if (sendCoffeeError) {
      // Do something with error
      console.error(sendCoffeeError);
      return;
    }

    console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
    console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
  });
});

/*********************************************************************************************************************************************/

export function makeCoffee(name, callback) {
    const estimationTime = 5000;
    let isSuccess = false;
  
    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);
  
    setTimeout(() => {
      // Penentuan hasil dari proses asinkron
      const number = Math.random();
      if (number > 0.3) {
        isSuccess = true;
      }
  
      if (!isSuccess) {
        callback(new Error('Gagal membuatkan kopi.'), null);
        return;
      }
  
      console.log('Pramusaji selesai membuat kopi.');
      callback(null, name);
    }, estimationTime);
}
  
export function sendCoffee(name, callback) {
    const estimationTime = 2000;
    let isSuccess = false;
  
    console.log('Pramusaji sedang mengantarkan kopi pesanan');
  
    setTimeout(() => {
      // Penentuan hasil dari proses asinkron
      const number = Math.random();
      if (number > 0.3) {
        isSuccess = true;
      }
  
      if (!isSuccess) {
        callback(new Error('Gagal mengantarkan kopi.'), null);
        return;
      }
  
      console.log('Pramusaji sudah sampai ke meja.');
      callback(null, name);
    }, estimationTime);
}

/*********************************************************************************************************************************************/

setTimeout(() => {
    // Penentuan hasil dari proses asinkron
    const number = Math.random();
    if (number > 0.3) {
      isSuccess = true;
    }
   
    if (!isSuccess) {
      callback(new Error('Gagal membuatkan kopi.'), null);
      return;
    }
   
    console.log('Pramusaji selesai membuat kopi.');
    callback(null, name);
}, estimationTime);

/*********************************************************************************************************************************************/

import { readFile } from 'fs';

readFile('./sample.txt', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const greeting = data.toString()
    .replace('%name%', 'Dicoding')
    .replace('%your_name%', 'JavaScript');

  console.log(greeting);
});

/*********************************************************************************************************************************************/

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
    if (makeCoffeeError) {
      console.log(makeCoffeeError);
      return;
    }
   
    sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
      if (sendCoffeeError) {
        console.log(sendCoffeeError);
        return;
      }
   
      console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
      console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
    });
});

/*********************************************************************************************************************************************/

doSomething((doSomethingError, doSomethingData) => {
    if (doSomethingError) {
      console.log(doSomethingData);
    }
   
    console.log(doSomethingData);
});

/*********************************************************************************************************************************************/

function onFulfilled(doSomethingData) {
    // Do your jobs when "fulfilled" happens…
    console.log(doSomethingData);
  }
   
  function onRejected(doSomethingError) {
    // Do your jobs when "rejected" happens…
    console.log(doSomethingError);
  }
   
doSomething().then(onFulfilled, onRejected);

/*********************************************************************************************************************************************/

function promiseExecutor(resolve, reject) {
    setTimeout(() => {
      console.log('Melakukan sesuatu sebelum Promise diselesaikan.');
   
      // Penentuan hasil dari proses asinkron
      const number = Math.random();
   
      // Nilai fulfillment dari Promise
      if (number > 0.5) {
        resolve('You did it!');
      }
   
      // Nilai rejection dari Promise
      else {
        reject(new Error('Sorry, something went wrong!'));
      }
    }, 2000);
  }
   
  function doSomething() {
    return new Promise(promiseExecutor);
}

/*********************************************************************************************************************************************/

import { doSomething } from './utils.mjs';

function onFulfilled(doSomethingData) {
  // Do your jobs when "fulfilled" happens…
  console.log(doSomethingData);
}

function onRejected(doSomethingError) {
  // Do your jobs when "rejected" happens…
  console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);

/*********************************************************************************************************************************************/

function promiseExecutor(resolve, reject) {
    setTimeout(() => {
      console.log('Melakukan sesuatu sebelum Promise diselesaikan.');
  
      // Penentuan hasil dari proses asinkron
      const number = Math.random();
  
      // Nilai fulfillment dari Promise
      if (number > 0.5) {
        resolve('You did it!');
      }
      // Nilai rejection dari Promise
      else {
        reject('Sorry, something went wrong!');
      }
    }, 2000);
  }
  
  export function doSomething() {
    return new Promise(promiseExecutor);
}

/*********************************************************************************************************************************************/

import { makeCoffee, sendCoffee } from './coffee.mjs';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then(
    (value) => {
      return sendCoffee(value);
    },
    (error) => {
      console.error(error.message);
      throw error;
    },
  )
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },
    (error) => {
      console.error(error.message);
      throw error;
    },
);

/*********************************************************************************************************************************************/

export function makeCoffee(name) {
    return new Promise((resolve, reject) => {
      const estimationTime = 2000;
      let isSuccess = false;
  
      const inSecond = Math.ceil(estimationTime / 1000);
      console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);
  
      setTimeout(() => {
        const number = Math.random();
        if (number > 0.3) {
          isSuccess = true;
        }
  
        if (!isSuccess) {
          reject(new Error('Maaf, kopi gagal dibuatkan.'));
          return;
        }
  
        console.log('Pramusaji selesai membuat kopi.');
        resolve(name);
      }, estimationTime);
    });
  }
  
  export function sendCoffee(name) {
    return new Promise((resolve, reject) => {
      const estimationTime = 1000;
      let isSuccess = false;
  
      console.log('Pramusaji sedang mengantarkan kopi pesanan');
  
      setTimeout(() => {
        const number = Math.random();
        if (number > 0.1) {
          isSuccess = true;
        }
  
        if (!isSuccess) {
          reject(new Error('Maaf, kopi gagal diantarkan.'));
          return;
        }
  
        console.log('Pramusaji sudah sampai ke meja.');
        resolve(name);
      }, estimationTime);
    });
}

/*********************************************************************************************************************************************/

makeCoffee(order)
  .then((value) => {
    return sendCoffee(value);
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
});

/*********************************************************************************************************************************************/

makeCoffee(order)
  .then((value) => { /* Do your jobs... */ })
  .then((value) => { /* Do your jobs... */ })
  .then((value) => { /* Do your jobs... */ })
  .then((value) => { /* Do your jobs... */ })
  .then((value) => { /* Do your jobs... */ })
  .then((value) => { /* Do your jobs... */ })
.catch((error) => console.log(error.message));

/*********************************************************************************************************************************************/

makeCoffee(order).then((value) => {
    sendCoffee(value).then((value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    });
});

/*********************************************************************************************************************************************/

makeCoffee(order)
  .then((value) => {
    sendCoffee(value); // <-- tidak akan dilanjutkan ke then berikutnya.
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
    throw error;
});

/*********************************************************************************************************************************************/

makeCoffee(order)
  .then((value) => {
    return sendCoffee(value); // <-- akan dilanjutkan ke then berikutnya.
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
    throw error;
});

/*********************************************************************************************************************************************/

import { doSomething } from './utils.mjs';

console.log('Start.');

doSomething()
  .then((value) => {
    console.log(value);
  });

console.log('End.');

/* Output:
Start.
End.
You did it.
*/

/*********************************************************************************************************************************************/

function promiseExecutor(resolve, reject) {
    setTimeout(() => {
      resolve('You did it!');
    }, 2000);
  }
  
  export function doSomething() {
    return new Promise(promiseExecutor);
}

/*********************************************************************************************************************************************/

import { doSomething } from './utils.mjs';
 
async function promiseWithAsyncAwait() {
  console.log('Start.');
 
  const result = await doSomething();
  console.log(result);
 
  console.log('End.');
}
 
promiseWithAsyncAwait();
 
/* Output:
Start.
You did it.
End.
*/

/*********************************************************************************************************************************************/

import { doSomething } from './utils.mjs';

async function promiseWithAsyncAwait() {
  try {
    console.log('Start.');

    const result = await doSomething();
    console.log(result);

    console.log('End.');
  } catch (error) {
    console.log(error.message);
  }
}

promiseWithAsyncAwait();

/* Output:
Start.
You did it.
End.
*/

/*********************************************************************************************************************************************/

function promiseExecutor(resolve, reject) {
    setTimeout(() => {
      resolve('You did it!');
    }, 2000);
  }
  
  export function doSomething() {
    return new Promise(promiseExecutor);
}

/*********************************************************************************************************************************************/

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups!')), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log('Success');
    console.log(values);
  })
  .catch((error) => {
    console.log('Failed');
    console.log(error.message);
  });

/* Output:
Failed
Ups!
*/

/*********************************************************************************************************************************************/

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ups!')), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise1, promise2, promise3])
  .then((values) => {
    console.log('Success');
    console.log(values);
  })
  .catch((error) => {
    console.log('Failed');
    console.log(error.message);
});

/* Output:
Success
[
  { status: 'fulfilled', value: 1 },
  {
    status: 'rejected',
    reason: Error: Ups!
        at Timeout._onTimeout (file:///home/nurrizkiadip/static-method.mjs:2:75)
        at listOnTimeout (node:internal/timers:573:17)
        at process.processTimers (node:internal/timers:514:7)
  },
  { status: 'fulfilled', value: 3 }
]
*/

/*********************************************************************************************************************************************/

import { API, sampleErrorData, sampleSuccessData } from './support.mjs';

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */
function processData(data) {
  const promises = data.map(item => API.fetch(item.delay, item.simulateError));
    return Promise.all(promises);
}

processData(sampleSuccessData)
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error));

processData(sampleErrorData)
.then(result => console.log('Success:', result))
.catch(error => console.error('Error:', error));

/*********************************************************************************************************************************************/

const API = {
    fetch(delay, simulateError = false) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (simulateError) {
            return reject(new Error(`Error from delay ${delay}`));
          }
  
          return resolve(`Data from delay ${delay}`);
        }, delay);
      });
    }
  };
  
  const sampleErrorData = [
    {
      delay: 100,
      simulateError: false,
    },
    {
      delay: 50,
      simulateError: true,
    },
  ];
  
  const sampleSuccessData = [
    {
      delay: 100,
      simulateError: false,
    },
    {
      delay: 50,
      simulateError: false,
    },
  ];
  
export { API, sampleErrorData, sampleSuccessData };
  
